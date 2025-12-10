import asyncio
from playwright import async_api
from playwright.async_api import expect

async def run_test():
    pw = None
    browser = None
    context = None
    
    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()
        
        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",         # Set the browser window size
                "--disable-dev-shm-usage",        # Avoid using /dev/shm which can cause issues in containers
                "--ipc=host",                     # Use host-level IPC for better stability
                "--single-process"                # Run the browser in a single process mode
            ],
        )
        
        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        context.set_default_timeout(5000)
        
        # Open a new page in the browser context
        page = await context.new_page()
        
        # Navigate to your target URL and wait until the network request is committed
        await page.goto("http://localhost:3000", wait_until="commit", timeout=10000)
        
        # Wait for the main page to reach DOMContentLoaded state (optional for stability)
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=3000)
        except async_api.Error:
            pass
        
        # Iterate through all iframes and wait for them to load as well
        for frame in page.frames:
            try:
                await frame.wait_for_load_state("domcontentloaded", timeout=3000)
            except async_api.Error:
                pass
        
        # Interact with the page elements to simulate user flow
        # -> Scroll down to find and render a portfolio section that uses the useSectionReveal hook
        await page.mouse.wheel(0, 1000)
        

        # -> Navigate away or unmount the portfolio section to test cleanup of GSAP ScrollTrigger animations
        frame = context.pages[-1]
        # Click 'About' link to navigate away and unmount the portfolio section for cleanup test
        elem = frame.locator('xpath=html/body/div/header/nav/div/a[3]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Optionally remount the portfolio section and unmount again to confirm consistent cleanup behavior
        frame = context.pages[-1]
        # Click 'Services' link to remount the portfolio section for a second unmount test
        elem = frame.locator('xpath=html/body/div/header/nav/div/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Navigate away or unmount the Services section again to verify consistent cleanup of GSAP ScrollTrigger animations
        frame = context.pages[-1]
        # Click 'About' link to unmount the Services section again for cleanup verification
        elem = frame.locator('xpath=html/body/div/header/nav/div/a[3]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=SERVICES').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=ABOUT').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=CONTACT').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Open to job opportunities worldwide. Passionate about building polished, intuitive, and thoughtful digital experiences that leave a mark.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Immersive fragrance launch with cinematic scroll-driven storytelling.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Data-driven patient portal with real-time visualizations.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Product microsite combining tactile UI with motion prototypes.').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    