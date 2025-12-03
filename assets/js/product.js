const PRODUCTS = [
  {
    id: 1,
    category: "Monitor",
    name: "18\" QLED Portable Monitor, 2K 2560×1600, 144Hz Gaming Display, 500 Nits, FreeSync HDR",
    img: "assets/img/monitors/1.jpg",
    imgs: [
      "assets/img/monitors/1.jpg",
      "assets/img/monitors/1.1.jpg",
      "assets/img/monitors/1.2.jpg",
      "assets/img/monitors/1.3.jpg",
        "assets/img/monitors/1.4.jpg"
    ],
    desc: "Experience immersive gaming with this 18-inch QLED portable monitor. Featuring a sharp 2K resolution (2560x1600) and a blazing fast 144Hz refresh rate, it delivers 500 nits of brightness and 100% DCI-P3 color accuracy. Perfect for laptops, consoles, and creative work."
  },
  {
    id: 2,
    category: "Monitor",
    name: "Portable Monitor 15.6\" FHD 85% sRGB 60Hz IPS HDR HDMI USB-C Travel Monitor with Speakers",
    img: "assets/img/monitors/2.jpg",
    imgs: [
      "assets/img/monitors/2.jpg",
      "assets/img/monitors/2.1.jpg",
      "assets/img/monitors/2.2.jpg",
      "assets/img/monitors/2.3.jpg",
        "assets/img/monitors/2.4.jpg"
    ],
    desc: "A versatile 15.6-inch FHD portable monitor designed for travel and productivity. With 85% sRGB color gamut, IPS HDR display, and built-in speakers, it connects easily via HDMI or USB-C to laptops, MacBooks, and gaming consoles."
  },
  {
    id: 3,
    category: "Monitor",
    name: "Portable Monitor 15.6 Inch 1080P FHD 60Hz 85% sRGB Travel Monitor with Cover Stand",
    img: "assets/img/monitors/3.jpg",
    imgs: [
      "assets/img/monitors/3.jpg",
      "assets/img/monitors/3.1.jpg",
      "assets/img/monitors/3.2.jpg",
      "assets/img/monitors/3.3.jpg"
    ],
    desc: "Enhance your workflow with this 15.6-inch 1080P FHD second screen. It features a protective cover stand, VESA mount compatibility, and excellent connectivity for laptops and consoles, making it an ideal choice for work or play on the go."
  },
  {
    id: 4,
    category: "Monitor",
    name: "Trofeo Vision 9.16 LCD White, 9.16-inch Full-Color LCD Magnetic Display Screen (1920x480)",
    img: "assets/img/monitors/4.jpg",
    imgs: [
      "assets/img/monitors/4.jpg",
      "assets/img/monitors/4.1.jpg",
      "assets/img/monitors/4.2.jpg",
      "assets/img/monitors/4.3.jpg"
    ],
    desc: "Customize your PC setup with the Trofeo Vision 9.16-inch LCD. This unique magnetic display fits inside your case to monitor CPU/GPU temperatures or display custom visuals in 1920x480 resolution. Easy installation with a sleek white finish."
  },
  {
    id: 5,
    category: "Monitor",
    name: "Portable Monitor 15.6\" 1080P FHD IPS Display, Ultra-Slim USB-C HDMI with Kickstand",
    img: "assets/img/monitors/5.jpg",
    imgs: [
      "assets/img/monitors/5.jpg",
      "assets/img/monitors/5.1.jpg",
      "assets/img/monitors/5.2.jpg",
      "assets/img/monitors/5.3.jpg"
    ],
    desc: "An ultra-slim, zero-bezel 15.6-inch screen extender featuring a built-in kickstand for instant setup. This 1080P IPS display offers crisp visuals and seamless USB-C/HDMI connectivity for Mac, Windows, and gaming devices."
  },
  {
    id: 6,
    category: "Monitor",
    name: "Portable Monitor 15.6\" 1080P for Laptop with Protective Sleeve & Built-in 90° Stand",
    img: "assets/img/monitors/6.jpg",
    imgs: [
      "assets/img/monitors/6.jpg",
      "assets/img/monitors/6.1.jpg",
      "assets/img/monitors/6.2.jpg",
      "assets/img/monitors/6.3.jpg"
    ],
    desc: "Designed for durability and convenience, this 15.6-inch monitor comes with a protective sleeve and a unique 90° adjustable stand. Perfect for extending your laptop screen or gaming on the go with support for Switch, Xbox, and PS5."
  },
  {
    id: 7,
    category: "Monitor",
    name: "15.6 Inch Portable Monitor FHD 1080P IPS Display with USB C and HDMI Ultra Slim",
    img: "assets/img/monitors/7.jpg",
    imgs: [
      "assets/img/monitors/7.jpg",
      "assets/img/monitors/7.1.jpg",
      "assets/img/monitors/7.2.jpg",
      "assets/img/monitors/7.3.jpg"
    ],
    desc: "A reliable and ultra-slim 15.6-inch travel monitor delivering clear 1080P IPS visuals. Lightweight and easy to carry, it serves as the perfect plug-and-play dual screen solution for laptops and mobile gaming."
  },
  {
    id: 8,
    category: "Monitor",
    name: "Portable Monitor 18.5” | 120HZ 1ms Gaming Monitor | 125% sRGB | FreeSync, HDR | 350Nits",
    img: "assets/img/monitors/8.jpg",
    imgs: [
      "assets/img/monitors/8.jpg",
      "assets/img/monitors/8.1.jpg",
      "assets/img/monitors/8.2.jpg",
      "assets/img/monitors/8.3.jpg"
    ],
    desc: "Dominate the game anywhere with this large 18.5-inch gaming monitor. Boasting a smooth 120Hz refresh rate, 1ms response time, and 125% sRGB color gamut, it brings desktop-class gaming performance to a portable form factor."
  },
  {
    id: 9,
    category: "Monitor",
    name: "Portable Monitor 15.6 Inch 1080P USB-C HDMI Ultra-Slim Travel Monitor with Kickstand",
    img: "assets/img/monitors/9.jpg",
    imgs: [
      "assets/img/monitors/9.jpg",
      "assets/img/monitors/9.1.jpg",
      "assets/img/monitors/9.2.jpg",
      "assets/img/monitors/9.3.jpg"
    ],
    desc: "Sleek and functional, this 15.6-inch monitor features an ultra-thin zero frame design and an integrated kickstand. Compatible with a wide range of devices from phones to consoles, ensuring you have a second screen wherever you are."
  },
  {
    id: 10,
    category: "Monitor",
    name: "23.8'' Portable Monitor, FHD 1080P 100Hz IPS Laptop Screen Extender with Detachable Stand",
    img: "assets/img/monitors/10.jpg",
    imgs: [
      "assets/img/monitors/10.jpg",
      "assets/img/monitors/10.1.jpg",
      "assets/img/monitors/10.2.jpg",
      "assets/img/monitors/10.3.jpg"
    ],
    desc: "Maximize your workspace with this massive 23.8-inch portable monitor. Featuring a 100Hz refresh rate and a detachable stand, it effectively functions as a full-sized desktop monitor that you can take with you."
  },
{
    id: 11,
    category: "Audio",
    name: "Portable Wireless Bluetooth Speaker IPX5 Waterproof, 20H Playtime, TWS Pair (Black)",
    img: "assets/img/audios/1.jpg",
    imgs: [
      "assets/img/audios/1.jpg",
      "assets/img/audios/1.1.jpg",
      "assets/img/audios/1.2.jpg",
      "assets/img/audios/1.3.jpg"
    ],
    desc: "A versatile black portable speaker designed for any occasion. With IPX5 water resistance, TWS pairing for stereo sound, and up to 20 hours of playtime, it makes for a perfect gift or daily audio companion."
  },
  {
    id: 12,
    category: "Audio",
    name: "Portable Bluetooth 5.3 Speaker with LED Lights, IPX5 Waterproof, Crystal Clear Sound",
    img: "assets/img/audios/2.jpg",
    imgs: [
      "assets/img/audios/2.jpg",
      "assets/img/audios/2.1.jpg",
      "assets/img/audios/2.2.jpg",
      "assets/img/audios/2.3.jpg"
    ],
    desc: "Light up the party with this compact Bluetooth 5.3 speaker. Featuring dynamic LED lights and crystal clear sound, it offers all-day battery life and water resistance, perfect for outdoor fun."
  },
  {
    id: 13,
    category: "Audio",
    name: "Hotlemon Large Bluetooth Speaker 240W Peak, Deep Bass, 15H Playtime, Fast Charge (Black)",
    img: "assets/img/audios/3.jpg",
    imgs: [
      "assets/img/audios/3.jpg",
      "assets/img/audios/3.1.jpg",
      "assets/img/audios/3.2.jpg",
      "assets/img/audios/3.3.jpg"
    ],
    desc: "Unleash powerful audio with this 240W peak speaker. It delivers deep, thumping bass and supports fast charging. With 15 hours of playtime, it's built for backyard parties and beach events."
  },
  {
    id: 14,
    category: "Audio",
    name: "Rock Party 9 1000W Portable Bluetooth Speaker, Dual 8\" Woofers, Karaoke/Guitar Inputs",
    img: "assets/img/audios/4.jpg",
    imgs: [
      "assets/img/audios/4.jpg",
      "assets/img/audios/4.1.jpg",
      "assets/img/audios/4.2.jpg",
      "assets/img/audios/4.3.jpg"
    ],
    desc: "The ultimate entertainment machine featuring a massive 1000W output and dual 8-inch woofers. Comes with vivid LED lights and inputs for microphones and guitars, ideal for large gatherings."
  },
  {
    id: 15,
    category: "Audio",
    name: "240W Peak Wireless Boombox with Subwoofer, LED Light Show, 15H Battery for Camping",
    img: "assets/img/audios/5.jpg",
    imgs: [
      "assets/img/audios/5.jpg",
      "assets/img/audios/5.1.jpg",
      "assets/img/audios/5.2.jpg",
      "assets/img/audios/5.3.jpg"
    ],
    desc: "A rugged wireless boombox designed for the outdoors. It boasts a large subwoofer for deep bass, a mesmerizing LED light show, and a durable battery that lasts 15 hours on a single charge."
  },
  {
    id: 16,
    category: "Audio",
    name: "180W Peak Outdoor Party Speaker, Bass Boost, RGB Lights, IPX5 Waterproof (Orange)",
    img: "assets/img/audios/6.jpg",
    imgs: [
      "assets/img/audios/6.jpg",
      "assets/img/audios/6.1.jpg",
      "assets/img/audios/6.2.jpg",
      "assets/img/audios/6.3.jpg"
    ],
    desc: "Stand out with this vibrant orange speaker featuring 180W peak power and Bass Boost technology. Waterproof and equipped with RGB lights, it's ready for any adventure or pool party."
  },
  {
    id: 17,
    category: "Audio",
    name: "Wired In-Ear Earbuds with Microphone, 3.5mm Jack, 4.2ft Cable (Black)",
    img: "assets/img/audios/7.jpg",
    imgs: [
      "assets/img/audios/7.jpg",
      "assets/img/audios/7.1.jpg",
      "assets/img/audios/7.2.jpg",
      "assets/img/audios/7.3.jpg"
    ],
    desc: "Reliable and comfortable wired earbuds with a universal 3.5mm jack. Includes a built-in microphone for clear calls and comes with multiple ear tip sizes for the perfect fit."
  },
  {
    id: 18,
    category: "Audio",
    name: "Wireless Bluetooth 5.4 Earbuds with Smart Touchscreen Case, ENC Noise Cancelling, 48H Playtime",
    img: "assets/img/audios/8.jpg",
    imgs: [
      "assets/img/audios/8.jpg",
      "assets/img/audios/8.1.jpg",
      "assets/img/audios/8.2.jpg",
      "assets/img/audios/8.3.jpg"
    ],
    desc: "Experience the future with these Bluetooth 5.4 earbuds featuring a smart touchscreen control case. Enjoy calm with ENC noise cancellation and extended listening with 48 hours of total battery life."
  },
  {
    id: 19,
    category: "Audio",
    name: "Bone Conduction Open-Ear Headphones Bluetooth 5.4, IPX6 Waterproof for Sports",
    img: "assets/img/audios/9.jpg",
    imgs: [
      "assets/img/audios/9.jpg",
      "assets/img/audios/9.1.jpg",
      "assets/img/audios/9.2.jpg",
      "assets/img/audios/9.3.jpg"
    ],
    desc: "Stay aware of your surroundings with these open-ear bone conduction headphones. IPX6 waterproof rated and lightweight, they are the ideal choice for runners, cyclists, and hikers."
  },
  {
    id: 20,
    category: "Audio",
    name: "Mini Wireless Earbuds V5.4 with LED Display Case, IP7 Waterproof, ENC Mics",
    img: "assets/img/audios/10.jpg",
    imgs: [
      "assets/img/audios/10.jpg",
      "assets/img/audios/10.1.jpg",
      "assets/img/audios/10.2.jpg",
      "assets/img/audios/10.3.jpg"
    ],
    desc: "Compact yet powerful, these mini earbuds feature an LED battery display and IP7 waterproofing. Equipped with ENC microphones for clear calls and delivering up to 56 hours of total playtime."
  },
{
    id: 21,
    category: "mouse-keyboard",
    name: "Wireless Keyboard and Mouse Combo, MARVO 2.4G Ergonomic with Phone Holder (Black)",
    img: "assets/img/mouse and keyboard/1.jpg",
    imgs: [
      "assets/img/mouse and keyboard/1.jpg",
      "assets/img/mouse and keyboard/1.1.jpg",
      "assets/img/mouse and keyboard/1.2.jpg",
      "assets/img/mouse and keyboard/1.3.jpg"
    ],
    desc: "Maximize productivity with this MARVO 2.4G wireless combo. Featuring an ergonomic keyboard with a built-in phone/tablet holder and a silent 6-button mouse, it ensures a clutter-free and quiet workspace."
  },
  {
    id: 22,
    category: "mouse-keyboard",
    name: "K84 Wireless TKL Gaming Combo, Rainbow Backlit, Rechargeable, Honeycomb Mouse (Black)",
    img: "assets/img/mouse and keyboard/2.jpg",
    imgs: [
      "assets/img/mouse and keyboard/2.jpg",
      "assets/img/mouse and keyboard/2.1.jpg",
      "assets/img/mouse and keyboard/2.2.jpg",
      "assets/img/mouse and keyboard/2.3.jpg"
    ],
    desc: "A compact 75% TKL gaming setup featuring a rainbow backlit keyboard and a lightweight honeycomb optical mouse (3200 DPI). Both are rechargeable, offering style and performance without the cables."
  },
  {
    id: 23,
    category: "mouse-keyboard",
    name: "Ultra Slim Bluetooth Keyboard and Mouse, Multi-Device, Low-Profile for Mac/Windows",
    img: "assets/img/mouse and keyboard/3.jpg",
    imgs: [
      "assets/img/mouse and keyboard/3.jpg",
      "assets/img/mouse and keyboard/3.1.jpg",
      "assets/img/mouse and keyboard/3.2.jpg",
      "assets/img/mouse and keyboard/3.3.jpg"
    ],
    desc: "Switch seamlessly between devices with this ultra-slim Bluetooth combo. The low-profile full-size keyboard and adjustable DPI mouse are perfect for minimalists working across PC, tablet, and phone."
  },
  {
    id: 24,
    category: "mouse-keyboard",
    name: "MX Keys S Combo - Performance Wireless Set with Palm Rest, Fast Scrolling, Customizable Light",
    img: "assets/img/mouse and keyboard/4.jpg",
    imgs: [
      "assets/img/mouse and keyboard/4.jpg",
      "assets/img/mouse and keyboard/4.1.jpg",
      "assets/img/mouse and keyboard/4.2.jpg",
      "assets/img/mouse and keyboard/4.3.jpg"
    ],
    desc: "The ultimate productivity duo. Features smart illumination, hyper-fast scrolling, and a comfortable palm rest. Compatible with multiple OS via Bluetooth or USB-C, designed for high-performance workflows."
  },
  {
    id: 25,
    category: "mouse-keyboard",
    name: "Silent Wireless Keyboard and Mouse Combo, Full-Sized, Adjustable DPI (Latte-Color)",
    img: "assets/img/mouse and keyboard/5.jpg",
    imgs: [
      "assets/img/mouse and keyboard/5.jpg",
      "assets/img/mouse and keyboard/5.1.jpg",
      "assets/img/mouse and keyboard/5.2.jpg",
      "assets/img/mouse and keyboard/5.3.jpg"
    ],
    desc: "Work in peace with this whisper-quiet wireless combo. The stylish latte-colored set includes a full-sized keyboard and a mouse with adjustable DPI, perfect for shared offices or home libraries."
  },
  {
    id: 26,
    category: "mouse-keyboard",
    name: "K10 Wired Gaming 3-in-1 Combo: RGB Mechanical Feel Keyboard, 7200 DPI Mouse, Wrist Rest",
    img: "assets/img/mouse and keyboard/6.jpg",
    imgs: [
      "assets/img/mouse and keyboard/6.jpg",
      "assets/img/mouse and keyboard/6.1.jpg",
      "assets/img/mouse and keyboard/6.2.jpg",
      "assets/img/mouse and keyboard/6.3.jpg"
    ],
    desc: "A complete starter pack for gamers. Includes an RGB anti-ghosting keyboard with mechanical feel, a high-precision 7200 DPI mouse, and a soft leather wrist rest for long gaming sessions."
  },
  {
    id: 27,
    category: "mouse-keyboard",
    name: "T102 Metal Panel Gaming Combo, 104 Keys, RGB Backlit, Waterproof, USB Wired",
    img: "assets/img/mouse and keyboard/7.jpg",
    imgs: [
      "assets/img/mouse and keyboard/7.jpg",
      "assets/img/mouse and keyboard/7.1.jpg",
      "assets/img/mouse and keyboard/7.2.jpg",
      "assets/img/mouse and keyboard/7.3.jpg"
    ],
    desc: "Built for durability, this gaming combo features a rugged all-metal panel keyboard that is waterproof and spill-resistant. The RGB backlighting and responsive keys make it a solid choice for PC gamers."
  },
  {
    id: 28,
    category: "mouse-keyboard",
    name: "Ultra Premium Wireless Combo - Rechargeable, Slim Design, Quiet, Unifying Receiver (Black)",
    img: "assets/img/mouse and keyboard/8.jpg",
    imgs: [
      "assets/img/mouse and keyboard/8.jpg",
      "assets/img/mouse and keyboard/8.1.jpg",
      "assets/img/mouse and keyboard/8.2.jpg",
      "assets/img/mouse and keyboard/8.3.jpg"
    ],
    desc: "Experience premium typing with this rechargeable, ultra-slim set. It offers a quiet, full-size layout with a number pad and connects reliably via a single unifying receiver for both devices."
  },
  {
    id: 29,
    category: "mouse-keyboard",
    name: "Ergonomic Wireless Combo with Wrist Rest, Phone Holder, Sleep Mode (Trueque)",
    img: "assets/img/mouse and keyboard/9.jpg",
    imgs: [
      "assets/img/mouse and keyboard/9.jpg",
      "assets/img/mouse and keyboard/9.1.jpg",
      "assets/img/mouse and keyboard/9.2.jpg",
      "assets/img/mouse and keyboard/9.3.jpg"
    ],
    desc: "Designed for comfort, this ergonomic combo features an integrated wrist rest and phone holder. The intelligent sleep mode extends battery life, making it an efficient choice for daily office use."
  },
  {
    id: 30,
    category: "mouse-keyboard",
    name: "Gaming/Office Set, 3-LED Backlit Mechanical Feel Keyboard & Breathing Light Mouse (RK108)",
    img: "assets/img/mouse and keyboard/10.jpg",
    imgs: [
      "assets/img/mouse and keyboard/10.jpg",
      "assets/img/mouse and keyboard/10.1.jpg",
      "assets/img/mouse and keyboard/10.2.jpg",
      "assets/img/mouse and keyboard/10.3.jpg"
    ],
    desc: "A versatile hybrid for work and play. The keyboard offers a mechanical feel with 3-LED backlighting, paired with a colorful breathing light mouse to add flair to your desk setup."
  },
  {
    id: 31,
    category: "mouse-keyboard",
    name: "K1 RGB LED Backlit Gaming Keyboard and Mouse Combo, 104 Key Wired (White)",
    img: "assets/img/mouse and keyboard/11.jpg",
    imgs: [
      "assets/img/mouse and keyboard/11.jpg",
      "assets/img/mouse and keyboard/11.1.jpg",
      "assets/img/mouse and keyboard/11.2.jpg",
      "assets/img/mouse and keyboard/11.3.jpg"
    ],
    desc: "Clean and stylish, this all-white gaming combo features vibrant RGB LED backlighting. The 104-key layout ensures full functionality for gaming or typing tasks."
  },
  {
    id: 32,
    category: "mouse-keyboard",
    name: "Ergonomic Wave Keys Combo, 4000mAh Rechargeable, Faux Lambskin Palm Rest",
    img: "assets/img/mouse and keyboard/12.jpg",
    imgs: [
      "assets/img/mouse and keyboard/12.jpg",
      "assets/img/mouse and keyboard/12.1.jpg",
      "assets/img/mouse and keyboard/12.2.jpg",
      "assets/img/mouse and keyboard/12.3.jpg"
    ],
    desc: "The pinnacle of ergonomic comfort. Features a unique wave key design for natural typing and a soft faux lambskin palm rest. Powered by a massive 4000mAh battery for long-lasting performance."
  },
{
    id: 33,
    category: "smart-home",
    name: "Air Purifier for Large Rooms (2400 Ft²) with True HEPA, Smart Mode, PM2.5 Display (White)",
    img: "assets/img/smarthome/1.jpg",
    imgs: [
      "assets/img/smarthome/1.jpg",
      "assets/img/smarthome/1.1.jpg",
      "assets/img/smarthome/1.2.jpg",
      "assets/img/smarthome/1.3.jpg"
    ],
    desc: "Breathe cleaner air with this powerful purifier covering up to 2400 sq ft. Features a True HEPA filter, real-time PM2.5 air quality display, and a whisper-quiet 22dB sleep mode. Includes aromatherapy function."
  },
  {
    id: 34,
    category: "smart-home",
    name: "Compact Air Purifier with H13 True HEPA Filter, 1076 Ft² Coverage, Aromatherapy (White)",
    img: "assets/img/smarthome/2.jpg",
    imgs: [
      "assets/img/smarthome/2.jpg",
      "assets/img/smarthome/2.1.jpg",
      "assets/img/smarthome/2.2.jpg",
      "assets/img/smarthome/2.3.jpg"
    ],
    desc: "Perfect for bedrooms or offices, this compact cleaner covers 1076 sq ft. The H13 True HEPA filter tackles pet hair, smoke, and pollen. Features a 360° intake, timer settings, and a built-in aroma pad."
  },
  {
    id: 35,
    category: "smart-home",
    name: "Blue Pure 511i Max Air Purifier for Small Rooms, HEPASilent Technology, App Control",
    img: "assets/img/smarthome/3.jpg",
    imgs: [
      "assets/img/smarthome/3.jpg",
      "assets/img/smarthome/3.1.jpg",
      "assets/img/smarthome/3.2.jpg",
      "assets/img/smarthome/3.3.jpg"
    ],
    desc: "Efficiently clean 926 sq ft in just one hour with HEPASilent technology. This smart purifier removes viruses, dust, and allergens quietly. Compact design fits perfectly in any small room."
  },
  {
    id: 36,
    category: "smart-home",
    name: "Smart WiFi Air Purifier for Large Rooms (2400 Ft²), App Control, AQI Display (Bright White)",
    img: "assets/img/smarthome/4.jpg",
    imgs: [
      "assets/img/smarthome/4.jpg",
      "assets/img/smarthome/4.1.jpg",
      "assets/img/smarthome/4.2.jpg",
      "assets/img/smarthome/4.3.jpg"
    ],
    desc: "Take control of your air quality via WiFi. This smart purifier covers 2400 sq ft and features 2X-Power filtration. Monitor air quality in real-time with the AQI display and enjoy a peaceful sleep mode."
  },
  {
    id: 37,
    category: "smart-home",
    name: "Pet Air Purifier with H13 HEPA & Washable Pre-Filter, 1500 Sq Ft Coverage (Black)",
    img: "assets/img/smarthome/5.jpg",
    imgs: [
      "assets/img/smarthome/5.jpg",
      "assets/img/smarthome/5.1.jpg",
      "assets/img/smarthome/5.2.jpg",
      "assets/img/smarthome/5.3.jpg"
    ],
    desc: "Designed specifically for pet owners. This unit covers 1500 sq ft and uses a washable pre-filter to trap fur and dander before the H13 HEPA filter removes odors. operates quietly at 22dB."
  },
  {
    id: 38,
    category: "smart-home",
    name: "Smart Air Purifier for 1,860 ft² with Washable Pre-Filter, True HEPA, AQI Sensor",
    img: "assets/img/smarthome/6.jpg",
    imgs: [
      "assets/img/smarthome/6.jpg",
      "assets/img/smarthome/6.1.jpg",
      "assets/img/smarthome/6.2.jpg",
      "assets/img/smarthome/6.3.jpg"
    ],
    desc: "A rapid-cleaning solution for large spaces up to 1,860 sq ft. Features a smart AQI sensor that adjusts speed automatically. Includes a washable pre-filter for cost-effective maintenance."
  },
  {
    id: 39,
    category: "smart-home",
    name: "500ML Ultrasonic Essential Oil Diffuser with Remote Control, 14 LED Colors (Brown)",
    img: "assets/img/smarthome/7.jpg",
    imgs: [
      "assets/img/smarthome/7.jpg",
      "assets/img/smarthome/7.1.jpg",
      "assets/img/smarthome/7.2.jpg",
      "assets/img/smarthome/7.3.jpg"
    ],
    desc: "Create a spa-like atmosphere with this large 500ml diffuser. Comes with a remote control for easy operation, 2 mist modes, and 14 LED color options to match your mood."
  },
  {
    id: 40,
    category: "smart-home",
    name: "Ultrasonic Aromatherapy Diffuser & Humidifier, 7 Color LED, Auto Off (Basic White)",
    img: "assets/img/smarthome/8.jpg",
    imgs: [
      "assets/img/smarthome/8.jpg",
      "assets/img/smarthome/8.1.jpg",
      "assets/img/smarthome/8.2.jpg",
      "assets/img/smarthome/8.3.jpg"
    ],
    desc: "A versatile addition to any room, serving as both an aroma diffuser and humidifier. Features 7 soothing LED colors, adjustable mist settings, and an auto-off safety function."
  },
  {
    id: 41,
    category: "smart-home",
    name: "Hotel Scent Diffuser Starter Kit - Waterless, 1500 Sq Ft Coverage, Remote Control (Black)",
    img: "assets/img/smarthome/9.jpg",
    imgs: [
      "assets/img/smarthome/9.jpg",
      "assets/img/smarthome/9.1.jpg",
      "assets/img/smarthome/9.2.jpg",
      "assets/img/smarthome/9.3.jpg"
    ],
    desc: "Bring the luxury hotel experience home. This waterless diffuser covers a massive 1500 sq ft and comes with a starter kit of five essential oils. Sleek black design with remote control."
  },
  {
    id: 42,
    category: "smart-home",
    name: "200ml Glass Ultrasonic Aroma Diffuser with Dome Design, 7 Color Lights",
    img: "assets/img/smarthome/10.jpg",
    imgs: [
      "assets/img/smarthome/10.jpg",
      "assets/img/smarthome/10.1.jpg",
      "assets/img/smarthome/10.2.jpg",
      "assets/img/smarthome/10.3.jpg"
    ],
    desc: "Elegant glass dome design makes this 200ml diffuser a beautiful decor piece. Perfect for yoga or relaxation, it features 7 color lights and an auto-off timer for peace of mind."
  },
  {
    id: 43,
    category: "smart-home",
    name: "Mini 100ml Aromatherapy Diffuser & Cool Mist Humidifier, Auto Shut-Off (White)",
    img: "assets/img/smarthome/11.jpg",
    imgs: [
      "assets/img/smarthome/11.jpg",
      "assets/img/smarthome/11.1.jpg",
      "assets/img/smarthome/11.2.jpg",
      "assets/img/smarthome/11.3.jpg"
    ],
    desc: "Compact and efficient, this mini 100ml diffuser is ideal for small desks or bedside tables. Provides cool mist humidification and aromatherapy with soft LED lighting."
  },
  {
    id: 44,
    category: "smart-home",
    name: "200ML Ceramic Essential Oil Diffuser with Wood Grain Base, Timer Settings",
    img: "assets/img/smarthome/12.jpg",
    imgs: [
      "assets/img/smarthome/12.jpg",
      "assets/img/smarthome/12.1.jpg",
      "assets/img/smarthome/12.2.jpg",
      "assets/img/smarthome/12.3.jpg"
    ],
    desc: "Combines a ceramic cover with a wood grain base for a natural look. This 200ml unit features multiple timer settings (1H/3H/6H) and whisper-quiet ultrasonic technology."
  },
  {
    id: 45,
    category: "smart-home",
    name: "500ML Large Room Essential Oil Diffuser, Adjustable Mist & Timer (White)",
    img: "assets/img/smarthome/13.jpg",
    imgs: [
      "assets/img/smarthome/13.jpg",
      "assets/img/smarthome/13.1.jpg",
      "assets/img/smarthome/13.2.jpg",
      "assets/img/smarthome/13.3.jpg"
    ],
    desc: "A high-capacity 500ml diffuser built for larger spaces. Keeps the air humidified and fragrant for hours. Features adjustable mist modes and variable LED lighting."
  }
];