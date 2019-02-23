const mockGeoJSON = {
  type: 'FeatureCollection',
  features: [
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -76.9750541388,
          38.8410857803,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Southern Ave',
        'marker-symbol': 'rail-metro',
        title: 'Southern Ave',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=107',
        lines: [
          'Green',
        ],
        address: '1411 Southern Avenue, Temple Hills, MD 20748',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -76.935256783,
          38.9081784965,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Deanwood',
        'marker-symbol': 'rail-metro',
        title: 'Deanwood',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=65',
        lines: [
          'Orange',
        ],
        address: '4720 Minnesota Avenue NE, Washington, DC 20019',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -76.9281249818,
          38.9786336339,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'College Park',
        'marker-symbol': 'rail-metro',
        title: 'College Park',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=79',
        lines: [
          'Green',
        ],
        address: '4931 Calvert Road, College Park, MD 20740',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -76.9110575731,
          39.0111458605,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Greenbelt',
        'marker-symbol': 'rail-metro',
        title: 'Greenbelt',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=80',
        lines: [
          'Green',
        ],
        address: '5717 Greenbelt Metro Drive, Greenbelt, MD 20740',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -76.9695766751,
          38.9550401707,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'West Hyattsville',
        'marker-symbol': 'rail-metro',
        title: 'West Hyattsville',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=77',
        lines: [
          'Green',
        ],
        address: '2700 Hamilton St., Hyattsville, MD 20782',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.113168835,
          38.8821828738,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Ballston',
        'marker-symbol': 'rail-metro',
        title: 'Ballston',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=99',
        lines: [
          'Orange',
          'Silver',
        ],
        address: '4230 Fairfax Drive, Arlington, VA 22201',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.053667574,
          38.8141436672,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Braddock Road',
        'marker-symbol': 'rail-metro',
        title: 'Braddock Road',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=47',
        lines: [
          'Blue',
          'Yellow',
        ],
        address: '700 N. West St., Alexandria, VA 22301',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -76.8680747681,
          38.8938349282,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Morgan Blvd',
        'marker-symbol': 'rail-metro',
        title: 'Morgan Blvd',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=110',
        lines: [
          'Blue',
          'Silver',
        ],
        address: '300 Garrett Morgan Blvd., Landover, MD 20785',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0628101291,
          38.8846868585,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Arlington Cemetery',
        'marker-symbol': 'rail-metro',
        title: 'Arlington Cemetery',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=42',
        lines: [
          'Blue',
        ],
        address: '1000 North Memorial Drive, Arlington, VA 22211',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0580425191,
          38.9347628908,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Cleveland Park',
        'marker-symbol': 'rail-metro',
        title: 'Cleveland Park',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=8',
        lines: [
          'Red',
        ],
        address: '3599 Connecticut Avenue NW, Washington, DC 20008',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.1646273343,
          39.1199273249,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Shady Grove',
        'marker-symbol': 'rail-metro',
        title: 'Shady Grove',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=18',
        lines: [
          'Red',
        ],
        address: '15903 Somerville Drive, Rockville, MD 20855',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -76.9953707387,
          38.8629631168,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Anacostia',
        'marker-symbol': 'rail-metro',
        title: 'Anacostia',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=85',
        lines: [
          'Green',
        ],
        address: '1101 Howard Road SE, Washington, DC 20020',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -76.9770889014,
          38.8867090898,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Stadium Armory',
        'marker-symbol': 'rail-metro',
        title: 'Stadium Armory',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=63',
        lines: [
          'Blue',
          'Orange',
          'Silver',
        ],
        address: '192 19th St. SE, Washington, DC 20003',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.1208179517,
          39.0624676517,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Twinbrook',
        'marker-symbol': 'rail-metro',
        title: 'Twinbrook',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=16',
        lines: [
          'Red',
        ],
        address: '1600 Chapman Avenue, Rockville, MD 20852',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0941291922,
          38.9843936603,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Bethesda',
        'marker-symbol': 'rail-metro',
        title: 'Bethesda',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=12',
        lines: [
          'Red',
        ],
        address: '7450 Wisconsin Avenue, Bethesda, MD 20814',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -76.9562627094,
          38.8513013835,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Naylor Road',
        'marker-symbol': 'rail-metro',
        title: 'Naylor Road',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=87',
        lines: [
          'Green',
        ],
        address: '3101 Branch Avenue, Temple Hills, MD 20748',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0051394199,
          38.8850625009,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Capitol South',
        'marker-symbol': 'rail-metro',
        title: 'Capitol South',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=59',
        lines: [
          'Blue',
          'Orange',
          'Silver',
        ],
        address: '355 First Street SE, Washington, DC 20003',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -76.9467477336,
          38.899191223,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Minnesota Avenue',
        'marker-symbol': 'rail-metro',
        title: 'Minnesota Avenue',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=64',
        lines: [
          'Orange',
        ],
        address: '4000 Minnesota Avenue NE, Washington, DC 20019',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.2271606721,
          38.8836251359,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Dunn Loring',
        'marker-symbol': 'rail-metro',
        title: 'Dunn Loring',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=102',
        lines: [
          'Orange',
        ],
        address: '2700 Gallows Road, Vienna, VA 22180',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.1291115237,
          38.799307672,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Van Dorn St',
        'marker-symbol': 'rail-metro',
        title: 'Van Dorn St',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=94',
        lines: [
          'Blue',
        ],
        address: '5690 Eisenhower Avenue, Alexandria, VA 22310',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0429165548,
          39.0149542752,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Forest Glen',
        'marker-symbol': 'rail-metro',
        title: 'Forest Glen',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=32',
        lines: [
          'Red',
        ],
        address: '9730 Georgia Avenue, Forest Glen, MD 20910',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -76.9118081145,
          38.8894658568,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Capitol Heights',
        'marker-symbol': 'rail-metro',
        title: 'Capitol Heights',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=91',
        lines: [
          'Blue',
          'Silver',
        ],
        address: '133 Central Avenue, Capitol Heights, MD 20743',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0969522905,
          39.0000564843,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Medical Center',
        'marker-symbol': 'rail-metro',
        title: 'Medical Center',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=13',
        lines: [
          'Red',
        ],
        address: '8810 Rockville Pike, Bethesda, MD 20814',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0336341721,
          38.9013327968,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'McPherson Square',
        'marker-symbol': 'rail-metro',
        title: 'McPherson Square',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=36',
        lines: [
          'Blue',
          'Orange',
          'Silver',
        ],
        address: '1400 I St. NW, Washington, DC 20005',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.234607,
          38.921732,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Greensboro',
        'marker-symbol': 'rail-metro',
        title: 'Greensboro',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=113',
        lines: [
          'Silver',
        ],
        address: '8305 Leesburg Pike, Vienna, VA 22182',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0502898097,
          38.8579043204,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Crystal City',
        'marker-symbol': 'rail-metro',
        title: 'Crystal City',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=45',
        lines: [
          'Blue',
          'Yellow',
        ],
        address: '1750 South Clark St., Arlington, VA 22202',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0219117007,
          38.9134768711,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Shaw',
        'marker-symbol': 'rail-metro',
        title: 'Shaw',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=72',
        lines: [
          'Green',
          'Yellow',
        ],
        address: '1701 8th St. NW, Washington, DC 20001',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0219143803,
          38.9064368149,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Mt Vernon Sq',
        'marker-symbol': 'rail-metro',
        title: 'Mt Vernon Sq',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=70',
        lines: [
          'Green',
          'Yellow',
        ],
        address: '700 M St. NW, Washington, DC 20001',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.021908484,
          38.8848377279,
        ],
      },
      type: 'Feature',
      properties: {
        description: "L'Enfant Plaza",
        'marker-symbol': 'rail-metro',
        title: "L'Enfant Plaza",
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=82',
        lines: [
          'Blue',
          'Orange',
          'Green',
          'Silver',
          'Yellow',
        ],
        address: '600 Maryland Avenue SW, Washington, DC 20024',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0280662342,
          38.888018702,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Smithsonian',
        'marker-symbol': 'rail-metro',
        title: 'Smithsonian',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=54',
        lines: [
          'Blue',
          'Orange',
          'Silver',
        ],
        address: '1200 Independence Avenue SW, Washington, DC 20004',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0440422943,
          38.8534163859,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'National Arpt',
        'marker-symbol': 'rail-metro',
        title: 'National Arpt',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=93',
        lines: [
          'Blue',
          'Yellow',
        ],
        address: '2400 S. Smith Blvd., Arlington, VA 22202',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0274958929,
          38.9170023992,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'U Street',
        'marker-symbol': 'rail-metro',
        title: 'U Street',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=73',
        lines: [
          'Green',
          'Yellow',
        ],
        address: '1240 U Street NW, Washington, DC 20009',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0752057891,
          38.7939158529,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Huntington',
        'marker-symbol': 'rail-metro',
        title: 'Huntington',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=50',
        lines: [
          'Yellow',
        ],
        address: '2501 Huntington Ave, Huntington, VA 22303',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0219153904,
          38.8983168097,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Gallery Place',
        'marker-symbol': 'rail-metro',
        title: 'Gallery Place',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=21',
        lines: [
          'Green',
          'Yellow',
          'Red',
        ],
        address: '630 H St. NW, Washington, DC 20001',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0795873255,
          38.9488514351,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Tenleytown',
        'marker-symbol': 'rail-metro',
        title: 'Tenleytown',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=10',
        lines: [
          'Red',
        ],
        address: '4501 Wisconsin Avenue NW, Washington, DC 20016',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0325521177,
          38.9278379675,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Columbia Heights',
        'marker-symbol': 'rail-metro',
        title: 'Columbia Heights',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=75',
        lines: [
          'Green',
          'Yellow',
        ],
        address: '3030 14th St. NW, Washington, DC 20009',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.112829859,
          39.0481513573,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'White Flint',
        'marker-symbol': 'rail-metro',
        title: 'White Flint',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=15',
        lines: [
          'Red',
        ],
        address: '5500 Marinelli Road, Rockville, MD 20852',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.023460904,
          38.9374346301,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Georgia Avenue',
        'marker-symbol': 'rail-metro',
        title: 'Georgia Avenue',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=76',
        lines: [
          'Green',
          'Yellow',
        ],
        address: '3700 Georgia Avenue NW, Washington, DC 20010',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -76.89410791,
          38.8867478168,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Addison Road',
        'marker-symbol': 'rail-metro',
        title: 'Addison Road',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=92',
        lines: [
          'Blue',
          'Silver',
        ],
        address: '100 Addison Road S., Capitol Heights, MD 20743',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0280779971,
          38.8983144732,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Metro Center',
        'marker-symbol': 'rail-metro',
        title: 'Metro Center',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=1',
        lines: [
          'Blue',
          'Orange',
          'Silver',
          'Red',
        ],
        address: '607 13th St. NW, Washington, DC 20005',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.210295,
          38.924432,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'McLean',
        'marker-symbol': 'rail-metro',
        title: 'McLean',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=111',
        lines: [
          'Silver',
        ],
        address: '1824 Dolley Madison Boulevard, McLean, VA 22102',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -76.9945342851,
          38.9332109913,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Brookland',
        'marker-symbol': 'rail-metro',
        title: 'Brookland',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=27',
        lines: [
          'Red',
        ],
        address: '801 Michigan Avenue NE, Washington, DC 20017',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0537156734,
          38.8694627012,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Pentagon',
        'marker-symbol': 'rail-metro',
        title: 'Pentagon',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=43',
        lines: [
          'Blue',
          'Yellow',
        ],
        address: '2 South Rotary Road, Arlington, VA 22202',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -76.9854953196,
          38.8812632736,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Potomac Avenue',
        'marker-symbol': 'rail-metro',
        title: 'Potomac Avenue',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=61',
        lines: [
          'Blue',
          'Orange',
          'Silver',
        ],
        address: '700 14th Street SE, Washington, DC 20003',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0310178268,
          38.9939493747,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Silver Spring',
        'marker-symbol': 'rail-metro',
        title: 'Silver Spring',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=31',
        lines: [
          'Red',
        ],
        address: '8400 Colesville Road, Silver Spring, MD 20910',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0595389215,
          38.8618823867,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Pentagon City',
        'marker-symbol': 'rail-metro',
        title: 'Pentagon City',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=44',
        lines: [
          'Blue',
          'Yellow',
        ],
        address: '1250 South Hayes St., Arlington, VA 22202',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.2726222569,
          38.8776011238,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Vienna',
        'marker-symbol': 'rail-metro',
        title: 'Vienna',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=103',
        lines: [
          'Orange',
        ],
        address: '9550 Saintsbury Drive, Fairfax, VA 22031',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -76.9960011267,
          38.8846222608,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Eastern Market',
        'marker-symbol': 'rail-metro',
        title: 'Eastern Market',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=60',
        lines: [
          'Blue',
          'Orange',
          'Silver',
        ],
        address: '701 Pennsylvania Avenue SE, Washington, DC 20003',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.1029772942,
          38.8833661518,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Virginia Square',
        'marker-symbol': 'rail-metro',
        title: 'Virginia Square',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=98',
        lines: [
          'Orange',
          'Silver',
        ],
        address: '3600 Fairfax Drive, Arlington, VA 22201',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0406954151,
          38.9013128941,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Farragut West',
        'marker-symbol': 'rail-metro',
        title: 'Farragut West',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=38',
        lines: [
          'Blue',
          'Orange',
          'Silver',
        ],
        address: '900 18th St. NW, Washington, DC 20006',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0434143597,
          38.9095980575,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Dupont Circle',
        'marker-symbol': 'rail-metro',
        title: 'Dupont Circle',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=6',
        lines: [
          'Red',
        ],
        address: '1525 20th St. NW, Washington, DC 20036',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -76.9114642177,
          38.8264463483,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Branch Avenue',
        'marker-symbol': 'rail-metro',
        title: 'Branch Avenue',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=89',
        lines: [
          'Green',
        ],
        address: '4704 Old Soper Road, Suitland, MD 20746',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -76.9885119326,
          38.8456577028,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Congress Height',
        'marker-symbol': 'rail-metro',
        title: 'Congress Height',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=86',
        lines: [
          'Green',
        ],
        address: '1290 Alabama Avenue SE, Washington, DC 20020',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -76.916628044,
          38.9166318546,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Cheverly',
        'marker-symbol': 'rail-metro',
        title: 'Cheverly',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=66',
        lines: [
          'Orange',
        ],
        address: '5501 Columbia Park, Cheverly, MD 20785',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0074142921,
          38.8977660392,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Union Station',
        'marker-symbol': 'rail-metro',
        title: 'Union Station',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=25',
        lines: [
          'Red',
        ],
        address: '701 First St. NE, Washington, DC 20002',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.1461253392,
          39.0843216075,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Rockville',
        'marker-symbol': 'rail-metro',
        title: 'Rockville',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=17',
        lines: [
          'Red',
        ],
        address: '251 Hungerford Drive, Rockville, MD 20850',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0166389566,
          38.8960903176,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Judiciary Square',
        'marker-symbol': 'rail-metro',
        title: 'Judiciary Square',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=23',
        lines: [
          'Red',
        ],
        address: '450 F Street NW, Washington, DC 20001',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.084995805,
          38.9594838736,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Friendship Heights',
        'marker-symbol': 'rail-metro',
        title: 'Friendship Heights',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=11',
        lines: [
          'Red',
        ],
        address: '5337 Wisconsin Avenue NW, Washington, DC 20015',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0501070535,
          39.0375271436,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Wheaton',
        'marker-symbol': 'rail-metro',
        title: 'Wheaton',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=33',
        lines: [
          'Red',
        ],
        address: '11171 Georgia Avenue, Silver Spring, MD 20902',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -76.8420375202,
          38.9050688072,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Largo Town Center',
        'marker-symbol': 'rail-metro',
        title: 'Largo Town Center',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=109',
        lines: [
          'Blue',
          'Silver',
        ],
        address: 'Largo Town Center 9000 Lottsford Road, Largo, MD 20774',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.34027,
          38.94778,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Wiehle-Reston East',
        'marker-symbol': 'rail-metro',
        title: 'Wiehle-Reston East',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=115',
        lines: [
          'Silver',
        ],
        address: '1862 Wiehle Avenue, Reston, VA 20190',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0181766987,
          38.976078531,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Takoma',
        'marker-symbol': 'rail-metro',
        title: 'Takoma',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=29',
        lines: [
          'Red',
        ],
        address: '327 Cedar Street NW, Washington, DC 20012',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0175052088,
          38.8764618668,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Waterfront',
        'marker-symbol': 'rail-metro',
        title: 'Waterfront',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=83',
        lines: [
          'Green',
        ],
        address: '399 M Street SW, Washington, DC 20024',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -76.8911979676,
          38.9335062344,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Landover',
        'marker-symbol': 'rail-metro',
        title: 'Landover',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=67',
        lines: [
          'Orange',
        ],
        address: '3000 Pennsy Drive, Hyattsville, MD 20785',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0219143879,
          38.8936652235,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Archives',
        'marker-symbol': 'rail-metro',
        title: 'Archives',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=81',
        lines: [
          'Green',
          'Yellow',
        ],
        address: '701 Pennsylvania Avenue NW, Washington, DC 20004',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0709086853,
          38.8959790962,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Rosslyn',
        'marker-symbol': 'rail-metro',
        title: 'Rosslyn',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=41',
        lines: [
          'Blue',
          'Orange',
          'Silver',
        ],
        address: '1850 N. Moore Street, Arlington, VA 22209',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0030204472,
          38.9070162121,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'New York Avenue',
        'marker-symbol': 'rail-metro',
        title: 'New York Avenue',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=108',
        lines: [
          'Red',
        ],
        address: '200 Florida Ave N.E., Washington, DC 20002',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.1890948225,
          38.900780551,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'W Falls Church',
        'marker-symbol': 'rail-metro',
        title: 'W Falls Church',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=101',
        lines: [
          'Orange',
        ],
        address: '7040 Haycock Road, Falls Church, VA 22043',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0953940983,
          38.886704839,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Clarendon',
        'marker-symbol': 'rail-metro',
        title: 'Clarendon',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=97',
        lines: [
          'Orange',
          'Silver',
        ],
        address: '3100 Wilson Blvd, Arlington, VA 22201',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0535573593,
          39.0617837655,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Glenmont',
        'marker-symbol': 'rail-metro',
        title: 'Glenmont',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=34',
        lines: [
          'Red',
        ],
        address: '12501 Georgia Avenue, Silver Spring, MD 20906',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.222262,
          38.920496,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Tysons Corner',
        'marker-symbol': 'rail-metro',
        title: 'Tysons Corner',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=112',
        lines: [
          'Silver',
        ],
        address: '1943 Chain Bridge Road, McLean, VA 22102',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0629861805,
          38.9432652883,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Van Ness UDC',
        'marker-symbol': 'rail-metro',
        title: 'Van Ness UDC',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=9',
        lines: [
          'Red',
        ],
        address: '4200 Connecticut Avenue NW, Washington, DC 20008',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.241472,
          38.928872,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Spring Hill',
        'marker-symbol': 'rail-metro',
        title: 'Spring Hill',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=114',
        lines: [
          'Silver',
        ],
        address: '1576 Spring Hill Road, Vienna, VA 22182',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.087131231,
          38.8901755312,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Court House',
        'marker-symbol': 'rail-metro',
        title: 'Court House',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=96',
        lines: [
          'Orange',
          'Silver',
        ],
        address: '2100 Wilson Blvd, Arlington, VA 22201',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0158682169,
          38.8850723551,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Federal Center SW',
        'marker-symbol': 'rail-metro',
        title: 'Federal Center SW',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=58',
        lines: [
          'Blue',
          'Orange',
          'Silver',
        ],
        address: '401 3rd Street SW, Washington, DC 20024',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0524180207,
          38.9250851371,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Woodley Park Zoo',
        'marker-symbol': 'rail-metro',
        title: 'Woodley Park Zoo',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=7',
        lines: [
          'Red',
        ],
        address: '2700 Connecticut Ave., NW, Washington, DC 20008',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.10384972,
          39.02926895,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Grosvenor',
        'marker-symbol': 'rail-metro',
        title: 'Grosvenor',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=14',
        lines: [
          'Red',
        ],
        address: '10300 Rockville Pike, Bethesda, MD 20852',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0022030768,
          38.9518467675,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Fort Totten',
        'marker-symbol': 'rail-metro',
        title: 'Fort Totten',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=28',
        lines: [
          'Green',
          'Yellow',
          'Red',
        ],
        address: '550 Galloway Street NE, Washington, DC 20011',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0281319984,
          38.8931808718,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Federal Triangle',
        'marker-symbol': 'rail-metro',
        title: 'Federal Triangle',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=53',
        lines: [
          'Blue',
          'Orange',
          'Silver',
        ],
        address: '302 12th St. NW, Washington, DC 20004',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.050277739,
          38.9006980092,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Foggy Bottom',
        'marker-symbol': 'rail-metro',
        title: 'Foggy Bottom',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=40',
        lines: [
          'Blue',
          'Orange',
          'Silver',
        ],
        address: '2301 I St. NW, Washington, DC 20037',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -76.9383648681,
          38.890975676,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Benning Road',
        'marker-symbol': 'rail-metro',
        title: 'Benning Road',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=90',
        lines: [
          'Blue',
          'Silver',
        ],
        address: '4500 Benning Road, Washington, DC 20019',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0050856513,
          38.8764810849,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Navy Yard',
        'marker-symbol': 'rail-metro',
        title: 'Navy Yard',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=84',
        lines: [
          'Green',
        ],
        address: '200 M Street SE, Washington, DC 20003',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0397008272,
          38.9032019462,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Farragut North',
        'marker-symbol': 'rail-metro',
        title: 'Farragut North',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=4',
        lines: [
          'Red',
        ],
        address: '1001 Connecticut Avenue NW, Washington, DC 20036',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0708743893,
          38.8004254497,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Eisenhower Avenue',
        'marker-symbol': 'rail-metro',
        title: 'Eisenhower Avenue',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=49',
        lines: [
          'Yellow',
        ],
        address: '2400 Eisenhower Avenue, Alexandria, VA 22314',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -76.9558815078,
          38.9653854458,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Prince Georges Plaza',
        'marker-symbol': 'rail-metro',
        title: 'Prince Georges Plaza',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=78',
        lines: [
          'Green',
        ],
        address: '3575 East West Highway, Hyattsville, MD 20782',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.1568830199,
          38.8859531663,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'E Falls Church',
        'marker-symbol': 'rail-metro',
        title: 'E Falls Church',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=100',
        lines: [
          'Orange',
          'Silver',
        ],
        address: '2001 N. Sycamore St., Arlington, VA 22205',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.0608112085,
          38.8065861172,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'King Street',
        'marker-symbol': 'rail-metro',
        title: 'King Street',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=48',
        lines: [
          'Blue',
          'Yellow',
        ],
        address: '1900 King Street, Alexandria, VA 22301',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -76.9959369166,
          38.9210596891,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Rhode Island Avenue',
        'marker-symbol': 'rail-metro',
        title: 'Rhode Island Avenue',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=26',
        lines: [
          'Red',
        ],
        address: '919 Rhode Island Avenue NE, Washington, DC 20018',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -77.1679701804,
          38.7665218926,
        ],
      },
      type: 'Feature',
      properties: {
        description: "Franconia-Springf'ld",
        'marker-symbol': 'rail-metro',
        title: "Franconia-Springf'ld",
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=95',
        lines: [
          'Blue',
        ],
        address: '6880 Frontier Drive, Springfield, VA 22150',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -76.9318701589,
          38.8439645544,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'Suitland',
        'marker-symbol': 'rail-metro',
        title: 'Suitland',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=88',
        lines: [
          'Green',
        ],
        address: '4500 Silver Hill Road, Suitland, MD 20746',
      },
    },
    {
      geometry: {
        type: 'Point',
        coordinates: [
          -76.8718412865,
          38.9477848558,
        ],
      },
      type: 'Feature',
      properties: {
        description: 'New Carrollton',
        'marker-symbol': 'rail-metro',
        title: 'New Carrollton',
        url: 'http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=68',
        lines: [
          'Orange',
        ],
        address: '4700 Garden City Drive, New Carrollton, MD 20784',
      },
    },
  ],
};

export default mockGeoJSON;
