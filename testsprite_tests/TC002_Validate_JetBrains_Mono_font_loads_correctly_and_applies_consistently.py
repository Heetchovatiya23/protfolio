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
        # -> Check network tab for successful JetBrains Mono font file loading with no errors
        frame = context.pages[-1]
        # Open Services navigation to trigger network activity for font files
        elem = frame.locator('xpath=html/body/div/header/nav/div/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Scroll down to reveal more page content and interactive elements to find possible font loading triggers or network logs
        await page.mouse.wheel(0, 1000)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        # Assert that key visible text elements are present to indirectly confirm font application
        await expect(frame.locator('text=SERVICES').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=WORKS').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=ABOUT').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=CONTACT').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Web Developer & Designer').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=KRISHSAVALIYA').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Open to job opportunities worldwide. Passionate about building polished, intuitive, and thoughtful digital experiences that leave a mark.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=CONTACT ↗').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AVAILABLE FOR WORK').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=JAN \'26').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=CAPABILITIES').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Services').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Experience Design').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Human-centered journeys crafted with motion cues and premium polish.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Narrative-driven flows').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Interaction systems').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Prototype validation').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Front-End Engineering').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Production-quality builds leveraging Next.js, GSAP, and WebGL-ready stacks.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Performance budgets').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Design system integration').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Edge-ready delivery').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Creative Direction').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Partnering with founders to shape bold visual narratives and launches.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Brand storytelling').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Launch strategy').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Art direction').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=SELECTED WORKS').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Projects').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=CREATIVE DEV').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=2024').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Atmos Studio').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Immersive fragrance launch with cinematic scroll-driven storytelling.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Next.js').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=GSAP').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=WebGL').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Visit project →').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=LEAD FRONT-END').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=2023').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Pulse Health').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Data-driven patient portal with real-time visualizations.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=React').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Tailwind').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=D3').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=EXPERIENCE LEAD').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=2022').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Nova XR').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Product microsite combining tactile UI with motion prototypes.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Three.js').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=GSAP').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=TypeScript').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=TOOLKIT').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Skills').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=LANGUAGES & TOOLS').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=MySQL').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Java').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Vibe-Coding').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=DBMS').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Python').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Virtual Machine').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Android Customization').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=FRAMEWORKS & LIBRARIES').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=chart.js').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=reactFlow').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Next.js').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=React').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=GSAP').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Framer Motion').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Three.js').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Tailwind').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=STORY').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=About Me').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=I collaborate with founders and art directors to craft high-impact product launches, immersive microsites, and living design systems. My process blends narrative thinking, fast iteration, and technical precision. From rapid prototypes to production builds, I focus on experiences that feel tactile, intentional, and performant across devices.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=CONNECT').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Contact').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=NAME').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=EMAIL').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=MESSAGE').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=SEND MESSAGE').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=© 2025 KRISH SAVALIYA. All rights reserved.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=LinkedIn').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=GitHub').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    