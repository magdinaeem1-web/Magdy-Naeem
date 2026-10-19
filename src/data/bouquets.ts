import { BouquetArticle } from '../types';

export const FEATURED_BOUQUETS: BouquetArticle[] = [
  {
    id: 'dutch-masters-revival',
    title: 'The Dutch Masters Revived: Velvet Shadows, Fruit & Heavy Petals',
    slug: 'dutch-masters-revival',
    subtitle: 'How 17th-century still-life oil paintings inspire modern florists to embrace melancholy, dark plum dahlias, trailing vines, and moody chiaroscuro.',
    category: 'Flemish Baroque',
    date: 'October 18, 2026',
    readTime: '6 min read',
    isHeroFeatured: true,
    author: {
      name: 'Elena Vance',
      role: 'Curator of Historical Floral Arts',
      avatarInitials: 'EV',
    },
    image: '/src/assets/images/bouquet_opulent_hero_1792425438463.jpg',
    imageAlt: 'Opulent Dutch Golden Age bouquet with velvet crimson garden roses, dark plum dahlias, and trailing jasmine in an antique brass compote',
    aspectRatio: '16:9',
    editorialLead: 'In an era consumed by symmetrical commercial bouquets and sterile cellophane wrapping, the Flemish still-life traditions of Rachel Ruysch and Jan Davidsz. de Heem remind us that true floral beauty lies in dramatic asymmetry, luscious heaviness, and the poignant presence of impending decay.',
    bodyParagraphs: [
      'To build an arrangement in the Dutch Baroque aesthetic is to reject the myth that every bloom must stand erect and pristine. Instead, we compose like an oil painter layering glazes: establishing deep, shadowy recessions with dark foliage before bringing forward the luminous, ruffled faces of garden roses.',
      'The composition anchors upon a footed 19th-century cast brass compote vase whose verdigris patina echoes the silvered underbelly of hellebore leaves. We employ no synthetic floral foam; a hand-crimped chicken wire armature allows stems to plunge at unexpected angles, dipping low over the rim.',
      'Notice the counterpoint of culinary fruit—a heavy cluster of unripened wine grapes and dark wild blackberries dripping from the vessel lip. In the seventeenth century, fruit symbolized seasonal transience and earthly abundance. Today, it anchors the visual weight, grounding the airy tendrils of budding star jasmine that drift toward the light.',
      'Water conditioning for these heavy-headed varieties is critical: garden roses require warm water hydration after a 45-degree angled stem cut under water, while dahlias benefit from a five-second stem sear in near-boiling water to release trapped air pockets.'
    ],
    pullQuote: {
      text: 'A floral arrangement is not a sculpture in stone; it is a quiet theatre of time, where a wilting petal is as sacred as an unfurling bud.',
      attribution: 'Elena Vance, Botanical Review Essay No. 42'
    },
    keyBotanicals: [
      'English Garden Roses (Rosa Munstead Wood)',
      'Black Plum Dahlias (Dahlia Rip City)',
      'Trailing Star Jasmine (Trachelospermum jasminoides)',
      'Green Winter Hellebore (Helleborus viridis)',
      'Wild Wine Grapes & Forest Blackberries'
    ],
    swatches: [
      { name: 'Velvet Crimson', hex: '#721C2B', description: 'Deep anthocyanin-rich rose petals' },
      { name: 'Shadow Plum', hex: '#341521', description: 'Velvety dahlia core tones' },
      { name: 'Dusty Mauve', hex: '#9E6D80', description: 'Aged intermediate spray blooms' },
      { name: 'Antique Brass', hex: '#8C7443', description: 'Aged compote metalwork patina' },
      { name: 'Bracken Moss', hex: '#3F4D38', description: 'Deep forest fern foliage shadow' }
    ],
    recipe: {
      vessel: 'Footed 19th-Century Aged Brass Compote (22cm diameter)',
      mechanics: 'Reusable uncoated chicken wire pillow secured with waterproof pot tape; zero floral foam.',
      waterTemperature: 'Tepid rainwater (approx. 24°C / 75°F) with one drop of organic citrus nutrient.',
      vaseLife: '6 to 8 days with daily water top-offs.',
      stems: [
        {
          flowerName: 'Munstead Wood Garden Rose',
          botanicalName: 'Rosa "Munstead Wood"',
          count: 5,
          role: 'focal',
          colorDescription: 'Deep crimson velvet with magenta undertones',
          notes: 'Remove lowest thorns and guard petals only if bruised; allows full quartered opening.'
        },
        {
          flowerName: 'Rip City Dahlia',
          botanicalName: 'Dahlia pinnata',
          count: 4,
          role: 'focal',
          colorDescription: 'Near-black plum to burgundy',
          notes: 'Sear stem base for 7 seconds in boiling water before placing in cold water.'
        },
        {
          flowerName: 'Antique Mauve Spray Rose',
          botanicalName: 'Rosa multiflora hybrid',
          count: 4,
          role: 'secondary',
          colorDescription: 'Faded lavender-mauve',
          notes: 'Clustered in the middle tier to bridge dark and highlight tones.'
        },
        {
          flowerName: 'Winter Hellebore',
          botanicalName: 'Helleborus viridis',
          count: 5,
          role: 'secondary',
          colorDescription: 'Chartreuse green with pale blush margins',
          notes: 'Harvest when seed pods begin to form for maximum longevity.'
        },
        {
          flowerName: 'Star Jasmine Tendrils',
          botanicalName: 'Trachelospermum jasminoides',
          count: 3,
          role: 'airy',
          colorDescription: 'Pure white pinwheel stars with delicate green vine',
          notes: 'Allowed to trail 40cm down the table face.'
        },
        {
          flowerName: 'Wild Blackberry & Grape Cluster',
          botanicalName: 'Rubus fruticosus & Vitis vinifera',
          count: 2,
          role: 'accent',
          colorDescription: 'Inky black and dusty violet',
          notes: 'Wired gently to the chicken wire mesh to drape over vessel lip.'
        }
      ],
      stepByStepCare: [
        'Fill brass compote with clean tepid water before inserting mechanics to avoid trapped bubbles.',
        'Begin by building a loose foliage cradle with fern and hellebore to mask the rim mechanics.',
        'Place the focal Munstead Wood roses on opposing diagonal axes, one facing forward-low, one rising high.',
        'Insert Rip City dahlias into the deep negative spaces to create psychological depth and shadow.',
        'Thread trailing jasmine vines last, letting them curve naturally with the gravity of their stems.',
        'Top up with fresh water daily; mist jasmine blossoms lightly in dry indoor climates.'
      ]
    },
    photoMeta: {
      lighting: 'Single north-facing tall window at 45° angle with black velvet negative fill on opposite wall.',
      lensAngle: '85mm f/2.8 macro portrait lens, focus stacked on central rose stamen.',
      mood: 'Rembrandt chiaroscuro, rich tactile grain, organic dew beads on velvety petals.',
      backstory: 'Arranged and photographed at dusk in our Cotswold greenhouse studio as rain fell on the glass ceiling.',
      paletteHex: ['#721C2B', '#341521', '#9E6D80', '#8C7443', '#3F4D38']
    }
  },
  {
    id: 'wild-meadow-poppy',
    title: 'The Air Between Stems: Naturalist Meadow Silhouettes in Stoneware',
    slug: 'wild-meadow-poppy',
    subtitle: 'Crafting effortless, wind-tossed arrangements using translucent Icelandic poppies, fluttering quaking grass, and morning luminescence.',
    category: 'Wild Meadow',
    date: 'October 14, 2026',
    readTime: '5 min read',
    author: {
      name: 'Soren Lindholm',
      role: 'Agro-Ecologist & Naturalist Florist',
      avatarInitials: 'SL',
    },
    image: '/src/assets/images/bouquet_meadow_poppy_1792425438475.jpg',
    imageAlt: 'Wild meadow arrangement featuring peach Icelandic poppies, cosmos, and quaking grass in speckled stoneware jar',
    aspectRatio: '4:3',
    editorialLead: 'The great secret of naturalist floristry is restraint. Rather than packing thirty stems into a tight dome, we leave breathing room between blooms so that a gentle breeze might pass through the vase without brushing two petals together.',
    bodyParagraphs: [
      'Icelandic poppies (Papaver nudicaule) possess the most expressive stems in the vegetable kingdom. Their swan-neck curves are not flaws to be wired straight; they are handwritten gestures of phototropism, reaching outward like dancing calligraphy.',
      'We pair these crinkled, paper-thin peach petals with nodding seed heads of Briza media (quaking grass) and pure white single-petaled cosmos. Together, they replicate the untamed margin of a Danish coastal meadow in early June.',
      'The vessel is an unglazed speckled stoneware jar thrown with coarse sand grog. Its earthy, tactile texture grounds the diaphanous fragility of the poppies, creating an immediate dialogue between earth and wind.',
      'Poppy stems secrete an opaque milky latex when cut that quickly coagulates and blocks water uptake. To prolong their vase life to six days, sear the freshly trimmed stem ends for twenty seconds over an open candle flame before plunging them into cool water.'
    ],
    pullQuote: {
      text: 'Do not bend the flower to your will; listen to the direction its neck was already turning toward the morning sky.',
      attribution: 'Soren Lindholm, Wild Field Notes'
    },
    keyBotanicals: [
      'Icelandic Poppies (Papaver nudicaule)',
      'White Sonata Cosmos (Cosmos bipinnatus)',
      'Quaking Grass (Briza media)',
      'Queen Anne’s Lace (Daucus carota)',
      'Silver Dollar Eucalyptus foliage'
    ],
    swatches: [
      { name: 'Peach Chiffon', hex: '#E7A17B', description: 'Translucent sunlight through poppy petal' },
      { name: 'Pale Buttercream', hex: '#F7EBD2', description: 'Secondary blossom interior shade' },
      { name: 'Speckled Stoneware', hex: '#D8CCA8', description: 'Handmade ceramic vessel clay' },
      { name: 'Eucalyptus Frosted', hex: '#879E90', description: 'Cool silver-green foliage tone' },
      { name: 'Meadow Gold', hex: '#BD914A', description: 'Ripened quaking grass seed heads' }
    ],
    recipe: {
      vessel: 'Hand-Thrown Speckled Ceramic Urn (18cm height)',
      mechanics: 'Internal brass floral frog (kenzan) seated on non-hardening florist putty.',
      waterTemperature: 'Cold tap water with ice cubes added during midday warmth.',
      vaseLife: '5 to 7 days as successive poppy buds unfurl.',
      stems: [
        {
          flowerName: 'Champagne Icelandic Poppy',
          botanicalName: 'Papaver nudicaule',
          count: 7,
          role: 'focal',
          colorDescription: 'Translucent pastel peach and apricot',
          notes: 'Sear cut stem base immediately with a kitchen lighter for 15 seconds.'
        },
        {
          flowerName: 'Sonata White Cosmos',
          botanicalName: 'Cosmos bipinnatus',
          count: 5,
          role: 'secondary',
          colorDescription: 'Pure paper white with bright yellow disc floret',
          notes: 'Select stems with 1 open bloom and 2 tight green buds.'
        },
        {
          flowerName: 'Quaking Grass',
          botanicalName: 'Briza media',
          count: 10,
          role: 'airy',
          colorDescription: 'Pale wheat to olive green',
          notes: 'Position higher than the flowers so they tremble with surrounding air movement.'
        },
        {
          flowerName: 'Frosted Eucalyptus',
          botanicalName: 'Eucalyptus cinerea',
          count: 4,
          role: 'foliage',
          colorDescription: 'Powder blue-green',
          notes: 'Stripped of leaves below the waterline to prevent bacterial buildup.'
        }
      ],
      stepByStepCare: [
        'Secure kenzan firmly to vessel bottom using waterproof putty.',
        'Seat quaking grass stems first around outer perimeter to define the airy spatial silhouette.',
        'Cut poppy stems at staggered heights from 15cm to 35cm, preserving natural curved sweeps.',
        'Press each stem firmly onto the brass pins at varied forward and back angles.',
        'Keep away from direct heating vents and ripe fruit (ethylene gas causes rapid petal drop).'
      ]
    },
    photoMeta: {
      lighting: 'Diffused morning window light through sheer linen curtains, soft high-key ambient glow.',
      lensAngle: '50mm prime f/2.0 on wooden farmhouse trestle table.',
      mood: 'Scandi morning tranquility, crisp pastoral poetry, micro-paper texture visibility.',
      backstory: 'Harvested at 6:00 AM from an organic cut-flower allotment in Zealand, Denmark.',
      paletteHex: ['#E7A17B', '#F7EBD2', '#D8CCA8', '#879E90', '#BD914A']
    }
  },
  {
    id: 'structural-ikebana-quince',
    title: 'The Art of Negative Space: Structural Ikebana & The Poetry of Line',
    slug: 'structural-ikebana-quince',
    subtitle: 'Honoring heaven, earth, and human balance with flowering quince branches, pristine white ranunculus, and raw volcanic basalt.',
    category: 'Ikebana & Wabi-Sabi',
    date: 'September 28, 2026',
    readTime: '7 min read',
    author: {
      name: 'Kenji Morimoto',
      role: 'Master of Sogetsu & Ikebana Philosophy',
      avatarInitials: 'KM',
    },
    image: '/src/assets/images/bouquet_ikebana_structure_1792425439596.jpg',
    imageAlt: 'Minimalist Ikebana arrangement with flowering quince branches and pristine white ranunculus in volcanic stone shallow bowl',
    aspectRatio: '4:3',
    editorialLead: 'In Western floral design, the void is often treated as an emptiness waiting to be stuffed. In Japanese Ikebana, the void (Ma) is the very soul of the work—the sacred interval that allows each branch and petal to exist in silent dialogue with the cosmos.',
    bodyParagraphs: [
      'This composition is rooted in the tripartite principle of Shin (Heaven, the dominant rising line), Soe (Humanity, the supporting lateral angle), and Hikae (Earth, the grounded foundation). By pruning away 70% of the flowering quince branch foliage, we reveal the tortured, expressive calligraphy of the bark.',
      'In contrast to the dark, angular wood, three double-petaled ‘Cloni Pon-Pon’ white ranunculus form the grounded heart. Their concentric mathematical petals represent quiet perfection, floating low over the water surface of a porous volcanic basalt suiban.',
      'Notice the mirror-like water line: the shallow reflection doubles the presence of the blossom while offering contemplative stillness. Water is not merely a utility; it is an active visual material in the vessel.',
      'Branch preparation requires careful splitting: the woody bases of quince branches should be split vertically with garden shears for 2 centimeters to maximize capillary water absorption without rotting.'
    ],
    pullQuote: {
      text: 'When you cut away seventy branches to leave just one, you have not removed nature—you have purified its voice.',
      attribution: 'Kenji Morimoto, Principles of Sogetsu Line'
    },
    keyBotanicals: [
      'Flowering Quince Branches (Chaenomeles speciosa)',
      'Cloni Pon-Pon White Ranunculus (Ranunculus asiaticus)',
      'Silver Olive Foliage (Olea europaea)',
      'Water Mirror & Porous Volcanic Stone'
    ],
    swatches: [
      { name: 'Basalt Charcoal', hex: '#242323', description: 'Volcanic stone container tone' },
      { name: 'Ranunculus Cream', hex: '#F9F8F4', description: 'Layered white petal highlights' },
      { name: 'Quince Coral', hex: '#D85458', description: 'Freshly swelling spring blossom buds' },
      { name: 'Gnarled Lichen', hex: '#5E574E', description: 'Aged branch bark and cambium' },
      { name: 'Silver Olive', hex: '#87917D', description: 'Underleaf metallic sheen' }
    ],
    recipe: {
      vessel: 'Hand-Carved Volcanic Basalt Shallow Bowl (Suiban, 28cm diameter)',
      mechanics: 'Heavy rectangular brass kenzan (needle frog) with lead base.',
      waterTemperature: 'Pure chilled spring water; depth maintained at exactly 2.5cm.',
      vaseLife: '10 to 14 days as quince buds progressively swell and bloom.',
      stems: [
        {
          flowerName: 'Gnarled Flowering Quince Branch',
          botanicalName: 'Chaenomeles speciosa',
          count: 2,
          role: 'focal',
          colorDescription: 'Dark woody bark studded with coral-rose buds',
          notes: 'Shin branch rises at 15° from vertical; Soe sweeps outward at 45°.'
        },
        {
          flowerName: 'Cloni Pon-Pon White Ranunculus',
          botanicalName: 'Ranunculus asiaticus',
          count: 3,
          role: 'secondary',
          colorDescription: 'Opulent multi-layered alabaster white',
          notes: 'Stems cut short (8cm, 12cm, 15cm) to create stepped depth near the water line.'
        },
        {
          flowerName: 'Silver-Green Olive Sprigs',
          botanicalName: 'Olea europaea',
          count: 3,
          role: 'foliage',
          colorDescription: 'Sage green with silver reverse',
          notes: 'Pruned down to three leaf pairs per branchlet to preserve negative space.'
        }
      ],
      stepByStepCare: [
        'Place the kenzan in the rear left quadrant of the stone suiban to create an asymmetrical dynamic.',
        'Split the woody base of the main quince branch 2cm vertically before pressing onto the brass pins.',
        'Prune any crossed or distracting twigs with sharp Japanese pruning shears (hasami).',
        'Insert the tallest white ranunculus slightly behind the branch base, angling the bloom 30° toward the viewer.',
        'Pour pure chilled water into the basin until the kenzan pins are completely submerged.',
        'Change water every two days using a bulb syringe to avoid disturbing the pinned branches.'
      ]
    },
    photoMeta: {
      lighting: 'Subtle indirect studio bounce mimicking late-afternoon shoji screen paper diffusion.',
      lensAngle: '90mm tilt-shift architectural lens, planar focus along the primary quince branch.',
      mood: 'Wabi-sabi contemplative silence, sculptural negative space, tactile stone grain.',
      backstory: 'Created during a private dawn workshop at our Kyoto pavilion studio.',
      paletteHex: ['#242323', '#F9F8F4', '#D85458', '#5E574E', '#87917D']
    }
  },
  {
    id: 'french-garden-romance',
    title: 'Pastoral Symphony: A French Country Romance of Dahlias & Sweet Peas',
    slug: 'french-garden-romance',
    subtitle: 'Golden hour on limestone flags: assembling Cafe au Lait dahlias, cascading sweet peas, and unspun silk ribbons for effortless garden poetry.',
    category: 'French Romance',
    date: 'September 15, 2026',
    readTime: '6 min read',
    author: {
      name: 'Camille Laurent',
      role: 'Floral Designer & Garden Writer, Provence',
      avatarInitials: 'CL',
    },
    image: '/src/assets/images/bouquet_french_garden_1792425441477.jpg',
    imageAlt: 'Pastoral French country bouquet with Cafe au Lait dahlias, sweet peas, and trailing pink silk ribbon on sunlit limestone courtyard',
    aspectRatio: '4:3',
    editorialLead: 'There is a distinctive languor to the late summer gardens of the Luberon. The lavender has dried into purple incense, the morning fog has burnt away, and the Cafe au Lait dahlias unfold their giant, creamy beige petals like layered linen dresses drying in the breeze.',
    bodyParagraphs: [
      'This bridal garden bouquet is hand-tied using the classical French spiral technique (spirale française). By rotating the bunch a quarter-turn with every three stems added at a 45-degree angle, we create a self-supporting dome that flares naturally without compressing delicate stems.',
      'The star is without doubt the Dinnerplate Dahlia ‘Cafe au Lait’, flanked by blushing garden spray roses and the intoxicating sweet-clove scent of trailing lathyrus (sweet peas). Feathery silver Dusty Miller foliage breaks the floral density, providing textural contrast.',
      'We finish the arrangement not with rigid florist pins, but with three meters of hand-loomed, unraveled raw-edge silk ribbon tinted with natural avocado stone dyes to an ethereal vintage blush.',
      'To prevent sweet peas from wilting, harvest them in the cool of early morning when the third floret on the stem has just opened; immerse stems in deep water for four hours before binding.'
    ],
    pullQuote: {
      text: 'A hand-tied bouquet should look as though you took a morning stroll through an overgrown garden with an open wicker basket.',
      attribution: 'Camille Laurent, The Provençal Garden'
    },
    keyBotanicals: [
      'Cafe au Lait Dinnerplate Dahlias',
      'Blush & Mauve Sweet Peas (Lathyrus odoratus)',
      'Juliet Garden Spray Roses',
      'Dusty Miller (Senecio cineraria)',
      'Provence Lavender Sprigs & Raw Silk Ribbon'
    ],
    swatches: [
      { name: 'Cafe au Lait', hex: '#DFBA9F', description: 'Iconic mocha-champagne dahlia petal' },
      { name: 'Blush Sweet Pea', hex: '#EABBB2', description: 'Delicate ruffled wing petal pink' },
      { name: 'Sunlit Limestone', hex: '#CEC1AD', description: 'Aged courtyard flagstone tone' },
      { name: 'Silver Miller', hex: '#95A69B', description: 'Velvety frosted foliage gray' },
      { name: 'Provence Lavender', hex: '#776E8A', description: 'Fragrant dried spike accent' }
    ],
    recipe: {
      vessel: 'Hand-Tied Presentation Bouquet (or displayed in wide terracotta urn)',
      mechanics: 'Pure spiral stem construction bound with natural hemp twine and hand-dyed silk ribbon.',
      waterTemperature: 'Cool water with flower preservative; avoid submerging ribbon tails.',
      vaseLife: '5 to 6 days for sweet peas; dahlias remain plump up to 7 days.',
      stems: [
        {
          flowerName: 'Cafe au Lait Dahlia',
          botanicalName: 'Dahlia "Cafe au Lait"',
          count: 3,
          role: 'focal',
          colorDescription: 'Creamy blush-champagne with subtle bronze undertones',
          notes: 'Handle by the stem base only; petals bruise under direct thumb pressure.'
        },
        {
          flowerName: 'Lathyrus Sweet Pea',
          botanicalName: 'Lathyrus odoratus',
          count: 8,
          role: 'airy',
          colorDescription: 'Ombré blush, lilac, and porcelain',
          notes: 'Provides legendary sweet fragrance and fluttering wing silhouette.'
        },
        {
          flowerName: 'Garden Spray Rose',
          botanicalName: 'Rosa "Juliet" & "Constance"',
          count: 6,
          role: 'secondary',
          colorDescription: 'Soft peach and vintage shell pink',
          notes: 'Staggered at varying depths within the spiral.'
        },
        {
          flowerName: 'Dusty Miller Foliage',
          botanicalName: 'Senecio cineraria',
          count: 5,
          role: 'foliage',
          colorDescription: 'Silvery-white felted leaves',
          notes: 'Shields delicate flower petals from friction.'
        },
        {
          flowerName: 'Provence Lavender',
          botanicalName: 'Lavandula angustifolia',
          count: 4,
          role: 'accent',
          colorDescription: 'Muted greyish purple',
          notes: 'Tucked along the collar for instant sensory warmth.'
        }
      ],
      stepByStepCare: [
        'Strip the bottom two-thirds of all stems completely of foliage and side thorns.',
        'Start with three central spray roses held between thumb and index finger.',
        'Add sweet pea and dahlia stems continuously in one direction at a 45° angle, rotating the bunch.',
        'Check the spiral stem collar periodically to ensure no crossing stems crush fragile stems.',
        'Tie off firmly at the narrowest binding point with unbleached hemp twine.',
        'Drape raw silk ribbon tails (1.5m length) over the twine, letting them flutter loosely.'
      ]
    },
    photoMeta: {
      lighting: '5:30 PM late-summer golden hour backlighting on historic stone flags of a Luberon farmhouse.',
      lensAngle: '70mm f/2.2 with creamy bokeh highlighting limestone texture and silk ribbon folds.',
      mood: 'Romantic pastoral nostalgia, warm buttery sunlight, tactile French countryside elegance.',
      backstory: 'Designed for an intimate dusk celebration at an olive mill near Gordes, France.',
      paletteHex: ['#DFBA9F', '#EABBB2', '#CEC1AD', '#95A69B', '#776E8A']
    }
  },
  {
    id: 'sculptural-avant-garde',
    title: 'Architectural Flora: Modernist Forms in King Protea & Smoked Botanicals',
    slug: 'sculptural-avant-garde',
    subtitle: 'Defying floral fragility: how brutalist concrete spaces and bold architectural botanicals create powerful contemporary sculptural statements.',
    category: 'Sculptural Avant-Garde',
    date: 'August 30, 2026',
    readTime: '5 min read',
    author: {
      name: 'Zayn Al-Mansoor',
      role: 'Architectural Floral Stylist',
      avatarInitials: 'ZM',
    },
    image: '/src/assets/images/bouquet_exotic_sculpture_1792425441777.jpg',
    imageAlt: 'Modernist floral arrangement with giant deep burgundy King Protea, terracotta anthuriums, dried palm, and smoke bush against concrete wall',
    aspectRatio: '4:3',
    editorialLead: 'Floristry often defaults to soft, pastel sentimentality. But botanicals can also be brutalist, dramatic, and fiercely geometric. By treating flowers as architectural solids, cantilevered planes, and textured clouds, we elevate arrangements into gallery installations.',
    bodyParagraphs: [
      'The crown jewel of this composition is a prehistoric marvel: the South African King Protea (Protea cynaroides). With leathery bracts shading from dusky rose to deep oxblood, it commands the composition with undeniable structural gravity.',
      'Flanking the protea are glossy burnt terracotta anthuriums whose lacquered spathes catch directional light like glazed mid-century tiles. Behind them, pleated dried fan palm spears shoot diagonally upward, establishing hard geometric vectors against the industrial concrete wall.',
      'The counter-weight to these hard surfaces is Cotinus coggygria (smoke bush)—a nebulous, plum-colored cloud of wispy inflorescence that absorbs and softens the transition between hard lines.',
      'Unlike temperate garden flowers that fade within days, this sculptural assembly is engineered for extreme longevity: both protea and anthuriums thrive for over two weeks, and the dried palm and smoke bush can be preserved indefinitely.'
    ],
    pullQuote: {
      text: 'Do not fear hard surfaces. When velvet protea bracts collide with raw poured concrete, botany transforms into architecture.',
      attribution: 'Zayn Al-Mansoor, Modernist Floral Manifesto'
    },
    keyBotanicals: [
      'Burgundy King Protea (Protea cynaroides)',
      'Glossed Sierra Brown Anthuriums (Anthurium andraeanum)',
      'Sun-Bleached Pleated Fan Palm (Livistona)',
      'Plum Royal Purple Smoke Bush (Cotinus coggygria)',
      'Black Pedestal Ceramic Urn'
    ],
    swatches: [
      { name: 'Protea Oxblood', hex: '#631B29', description: 'Leathery outer floral bracts' },
      { name: 'Terracotta Lacquer', hex: '#B8552E', description: 'Anthurium glossy spathe tone' },
      { name: 'Palm Ochre', hex: '#A37E55', description: 'Sun-dried architectural palm pleat' },
      { name: 'Smoked Plum Cloud', hex: '#5E3A4B', description: 'Cotinus wispy filament haze' },
      { name: 'Raw Concrete', hex: '#878680', description: 'Brutalist studio background grey' }
    ],
    recipe: {
      vessel: 'Heavy Smoked Charcoal Ceramic Geometric Vessel (seated on concrete block)',
      mechanics: 'Dry-wet hybrid structure: heavy iron floral cage with weighted sand base for counterbalance.',
      waterTemperature: 'Room temperature water; spray anthurium spathes daily to preserve gloss.',
      vaseLife: '14 to 21 days with minimal intervention.',
      stems: [
        {
          flowerName: 'Burgundy King Protea',
          botanicalName: 'Protea cynaroides',
          count: 1,
          role: 'focal',
          colorDescription: 'Deep crimson-burgundy velvety cone with pointed pink tips',
          notes: 'Remove lower foliage; change water weekly to prevent stem stem rot.'
        },
        {
          flowerName: 'Sierra Brown Anthurium',
          botanicalName: 'Anthurium andraeanum',
          count: 4,
          role: 'secondary',
          colorDescription: 'Glazed terracotta, brick red, and burnt caramel',
          notes: 'Trim stem underwater at a 45° angle; highly durable tropical specimen.'
        },
        {
          flowerName: 'Dried Pleated Fan Palm Spear',
          botanicalName: 'Livistona chinensis',
          count: 2,
          role: 'airy',
          colorDescription: 'Bleached biscuit and warm hazelnut',
          notes: 'Trim leaf edges into crisp geometric points with sharp shears.'
        },
        {
          flowerName: 'Royal Purple Smoke Bush',
          botanicalName: 'Cotinus coggygria',
          count: 4,
          role: 'foliage',
          colorDescription: 'Moody plum-burgundy aerosol cloud',
          notes: 'Creates diffuse volumetric shadows between the sharp anthurium angles.'
        }
      ],
      stepByStepCare: [
        'Weight the bottom of the ceramic vessel with river pebbles to counterbalance the heavy protea head.',
        'Insert the two dried fan palms at divergent angles (45° and 60°) to establish the architectural height.',
        'Seat the heavy King Protea at the lower focal center, angled 15° forward.',
        'Arrange the four anthuriums in a cascading rhythmic diagonal, allowing their glossy faces to catch side light.',
        'Nestle clouds of plum smoke bush around the base to soften the transition to the vase rim.',
        'Keep in indirect light; this arrangement requires no refrigeration or flower food.'
      ]
    },
    photoMeta: {
      lighting: 'High industrial studio skylight with hard rim lighting accentuating the gloss of anthurium spathes.',
      lensAngle: '105mm telephoto f/4.0 against industrial board-formed concrete backdrop.',
      mood: 'Avant-garde runway editorial, tactile brutalist contrast, sculptural stillness.',
      backstory: 'Created for the London Design Biennale botanical architecture pavilion.',
      paletteHex: ['#631B29', '#B8552E', '#A37E55', '#5E3A4B', '#878680']
    }
  }
];
