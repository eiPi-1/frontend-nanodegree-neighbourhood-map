var initialEntities = [
	{
		lat: 42.423114,
		lan: 25.624144,
		title: "",
		tags: ["old architecture"],
		address: "37 Sava Silov Str.",
		city: "Stara Zagora",
		description: "",

	},
	{
		lat: 42.423215, 
		lan: 25.624014,
		title: "",
		tags: ["old architecture"],
		address: "39 Sava Silov Str.",
		city: "Stara Zagora",
		description: "",
	},
	{
		lat: 42.423395, 
		lan: 25.624094,
		title: "",
		tags: ["old architecture", "cafe"],
		address: "41 Sava Silov Str.",
		city: "Stara Zagora",
		description: "",
	},
	{
		lat: 42.423018,
		lan: 25.633816,
		title: "",
		tags: ["old architecture"],
		address: "Hristo Botev 141 Str.",
		city: "Stara Zagora",
		description: "",
	},
	{
		lat: 42.428651,
		lan: 25.628424,
		title: "",
		tags: ["old architecture"],
		address: "85 Tzar Ivan Shishman Str.",
		city: "Stara Zagora",
		description: "",
	},
	{
		lat: 42.428871,
		lan: 25.629500,
		title: "",
		tags: ["old architecture"],
		address: "2 Pencho Minev Str.",
		city: "Stara Zagora",
		description: "",
	},
	{
		lat: 42.428926,
		lan: 25.629854,
		title: "",
		tags: ["old architecture"],
		address: "123 General Stoletov Str",
		city: "Stara Zagora",
		description: "",
	},
	{
		lat: 42.424896,
		lan: 25.629651,
		title: "Drums",
		address: "115 Tsar Simeon Veliki Bul.",
		tags: ["old architecture", "pub"],
		city: "Stara Zagora",
		description: "",
	},
	{
		lat: 42.424131, 
		lan: 25.630113,
		title: "Buhchev's House",
		address: "54 Tsar Ivan Shisman Str.",
		tags: ["old architecture", "restaurant"],
		city: "Stara Zagora",
		description: "",
	},
	{
		lat: 42.423623, 
		lan: 25.634149,
		title: "Geo Milev's House Museum",
		address: "43 Geo Milev Str.",
		tags: ["old architecture", "museum"],
		city: "Stara Zagora",
		description: "",
	},
	{
		lat: 42.423623, 
		lan: 25.634149,
		title: "",
		address: "38 Petar Parchevich Str.",
		tags: ["old architecture"],
		city: "Stara Zagora",
		description: "",
	},
	{
		lat: 42.425479, 
		lan: 25.635409,
		title: "",
		address: "134 Tsar Simeon Veliki Bul.",
		tags: ["old architecture"],
		city: "Stara Zagora",
		description: "",
	},
	{
		lat: 42.425699,
		lan: 25.636125,
		title: "",
		address: "140 Tsar Simeon Veliki Bul.",
		tags: ["old architecture"],
		city: "Stara Zagora",
		description: "",
	},
	{
		lat: 42.426418, 
		lan: 25.638358,
		title: "",
		address: "70 Lyuben Karavelov Str.",
		tags: ["old architecture", "school"],
		city: "Stara Zagora",
		description: "",
	},
	{
		lat: 42.427120, 
		lan: 25.625069,
		title: "Antique Forum Augusta Trayana",
		address: "35 Metodi Kusev Bul.",
		tags: ["old architecture", "antique", "opera", "music", "culture"],
		city: "Stara Zagora",
		description: "",
	},
	{
		lat: 42.427564, 
		lan: 25.625972,
		title: "State Opera House",
		address: "30 Metodi Kusev Bul.",
		tags: ["old architecture", "opera", "music", "culture"],
		city: "Stara Zagora",
		description: "",
	},
	{
		lat: 42.426125, 
		lan: 25.626087,
		title: "City Theater House",
		address: "28 Metodi Kusev Bul.",
		tags: ["old architecture", "theater", "culture"],
		city: "Stara Zagora",
		description: "",
	},
	{
		lat: 42.426302, 
		lan: 25.630133,
		title: "Centra Post Office Building",
		address: "106-108 Saint Kniaz Boris Str.",
		tags: ["old architecture", "post", "antique"],
		city: "Stara Zagora",
		description: "",
	},
	{
		lat: 42.428109, 
		lan: 25.625618,
		title: "Ancient underground house with mosaic",
		address: "52-A General Stoletov Str.",
		tags: ["antique"],
		city: "Stara Zagora",
		description: "",
	},
	{
		lat: 42.426582, 
		lan: 25.627741,
		title: "Regional Museum of History",
		description: "Ancient ruins, street in the basement of the museum.",
		address: "52-A General Stoletov Str.",
		tags: ["antique", "museum"],
		city: "Stara Zagora"
	},
	{
		lat: 42.438533, 
		lan: 25.617191 ,
		title: "Badminton Courts Outdoors",
		description: "In the spring, summer afternoons many amateurs play there.<br>" + 
		"The courts are surrounded by trees and allеys.",
		address: "Ayazmo Park",
		tags: ["park", "nature", "sport", "outdoors"],
		city: "Stara Zagora"
	},
	{
		lat: 42.431600, 
		lan: 25.639710  ,
		title: "Outdoor Fitness",
		description: "Many people gather here in the afternoons to exercise.",
		address: "103 Angel Kanchev Str.",
		tags: ["outdoors", "sport", "fitness"],
		city: "Stara Zagora"
	},
];


var Entity = function(data) {
	this.lat = ko.observable(data.lat);
	this.lan = ko.observable(data.lan);
	this.title = ko.observable(data.title);
	this.address = ko.observable(data.address);
	this.tags = ko.observableArray(data.tags);
	this.city = ko.observable(data.city);
	this.description = ko.observable(data.description);
};


var ViewModel = function() {
	var self = this;

	self.searchTerms = ko.observable("");
	self.entityList= ko.observableArray([]);

	// setting initial location on the map and other settings
	var myLatlng = new google.maps.LatLng(42.424710, 25.627823);
	var mapOptions = {
	  zoom: 13,
	  center: myLatlng
	}

	$('#searchbox').on('keyup', function(){
		self.filterEntities();
	});


	// creating the map in the UI
	map = new google.maps.Map(document.getElementById("map"), mapOptions);

	// mapping each entity from the model with a marker on the map in the UI
	initialEntities.forEach(function(entity){
		var koEntity = new Entity(entity);
		self.entityList.push(koEntity);

		// constructing the string to be used in the info window
		var entityTitle;
		if (koEntity.title().length > 0){
			entityTitle = koEntity.title();
		} else {
			entityTitle = koEntity.address();
		}

		var contentString = '<div id="content", class = "GMPSInfoWindow", style="height: 200px;">' +
		'<h2>' + entityTitle + '</h2>' +
		koEntity.description() + '<br>' +
		'</div>';

		// constructing the info window object
		var infowindow = new google.maps.InfoWindow({
		    content: contentString
		  });

		// constructing the Google Maps marker
		var marker = new google.maps.Marker({
		    position: new google.maps.LatLng(entity.lat, entity.lan),
		    title: entity.title
		});

		// adding a listener so that when the marker is clicked
		// a bouncing marker animation is triggered
		marker.addListener('click', function() {
		  if (marker.getAnimation() !== null) {
		    marker.setAnimation(null);
		  } else {
		    marker.setAnimation(google.maps.Animation.BOUNCE);
		  }
		  self.setEntity(koEntity);
		});

		// adding the marker to the map
		marker.setMap(map);
	});

	self.mapEntities = function(entities) {
		map = new google.maps.Map(document.getElementById("map"), mapOptions);
		entities.forEach(function(entity){
			var koEntity = new Entity(entity);

			// constructing the Google Maps marker
			var marker = new google.maps.Marker({
			    position: new google.maps.LatLng(entity.lat, entity.lan),
			    title: entity.title
			});

			// adding a listener so that when the marker is clicked
			// a bouncing marker animation is triggered
			marker.addListener('click', function() {
			  if (marker.getAnimation() !== null) {
			    marker.setAnimation(null);
			  } else {
			    marker.setAnimation(google.maps.Animation.BOUNCE);
			  }
			  self.setEntity(koEntity);
			});

			// adding the marker to the map
			marker.setMap(map);
		});
	};

	self.mapEntity = function(entity, info) {
		// creating the map in the UI
		map = new google.maps.Map(document.getElementById("map"), mapOptions);

		// constructing the string to be used in the info window
		var entityTitle;
		if (entity.title().length > 0){
			entityTitle = entity.title();
		} else {
			entityTitle = entity.address();
		}

		var contentString = '<div id="content" class = "GMPSInfoWindow" style="height: 200px;">' +
		'<h2>' + entityTitle + '</h2>' +
		entity.description() + '<br>' +
		info + 
		'</div>';

		// constructing the info window object
		var infowindow = new google.maps.InfoWindow({
		    content: contentString
		  });

		// constructing the Google Maps marker
		var marker = new google.maps.Marker({
		    position: new google.maps.LatLng(entity.lat(), entity.lan()),
		    title: entity.title(),
		    animation: google.maps.Animation.DROP,
		});

		// adding a listener so that when the marker is clicked
		// a bouncing marker animation is triggered
		marker.addListener('click', function() {
		  if (marker.getAnimation() !== null) {
		    marker.setAnimation(null);
		  } else {
		    marker.setAnimation(google.maps.Animation.BOUNCE);
		  }
		});

		infowindow.open(map, marker);

		// adding the marker to the map
		marker.setMap(map);
	};

	this.listEntities = function(entities) {
		// clear the array of entities
		self.entityList([]);

		// add to the array the entities passed
		entities.forEach(function(entity){
			self.entityList.push(new Entity(entity));
		});
	};

	this.filterEntities = function() {
		// get the user search terms from the search bar of the UI
		var searchTerms = $('#searchbox').val().toLowerCase();
		var filteredEntities = [];

		// build an array of entities whose tags contain words
		// as in the search terms
		initialEntities.forEach(function(entity){


			// TODO: entity.tags should be converted to lowercase first before search
			if ($.inArray(searchTerms, entity.tags) > -1 
				|| $.inArray(searchTerms, entity.address.toLowerCase().split(" ")) > -1 ){
				filteredEntities.push(entity);
			} else if (searchTerms.length==0){
				filteredEntities.push(entity);
			}
		});

		// map the selected entities on the Google Maps map in the UI
		self.mapEntities(filteredEntities);
		// list the entities in an unsorted list in the UI
		self.listEntities(filteredEntities);
	};
	
	this.setEntity = function(clickedEntity) {

		// transform from knockout object to simple JSON
		entity = {
			lat: clickedEntity.lat(),
			lan: clickedEntity.lan(),
			title: clickedEntity.title(),
			tags: clickedEntity.tags(),
			address: clickedEntity.address(),
			city: clickedEntity.city()
		};

		// start building the strint to be displayed in the Google maps marker
		// info window for this entity.
		var info = "<h4>Relevant places:</h4>";

		// the url string to be used for the Wiki API
		var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' +
                entity.city.split(' ').join('+')  + 
                '&format=json&callback=wikiCallback';

        // the function to be executed if Wiki API does not responds
        var wikiRequestTimeout = setTimeout(function(){
        console.log("failed to get wikipedia resources");
	    }, 8000);

        // getting data from Wiki API
	    $.ajax({url: wikiUrl,
	            dataType: 'jsonp',
	            done: function(response){
	                console.log(response)
	              var WikiArticlesTitles = response[1];
	              var WikiArticlesURLs = response[3];

	              for (var i = 0; i < WikiArticlesTitles.length; i++) {
	                var articleTitle = WikiArticlesTitles[i];
	                var articleUrl = WikiArticlesURLs[i];

	                    var li_elem = '<li>' + '<a href="' +
	                     articleUrl + '">' + articleTitle +
	                      "</a>"+ "</li>" ;
	                    console.log(li_elem);
	              };
	              clearTimeout(wikiRequestTimeout);
	            }
	        });

	    // the url string to be used for the Foursquare API
	   	var fsqrUrl = "https://api.foursquare.com/v2/venues/search" +
					  "?client_id=" +
					  "&client_secret=" +
					  "&v=20130815" +
					  "&ll=" + entity.lat + "," + entity.lan +
					  "&query=" + entity.title.split(' ').join('+');

		// getting data from Foursquare API
		$.getJSON(fsqrUrl, function (data) {
	        venues = data.response.venues;

	        // building the info window string by adding
	        // relevant venues from  Foursquare
	        for (var i = 0; i < venues.length; i++) {
	            var venue = venues[i];

	            if ( venue.name ){
	                info = info + venue.name;

	            };
	            // adding the address of the venue to the info window string
	            if ( venue.location ){
	            	if (venue.location.formattedAddress){
	            		info = info + ' - ' + venue.location.formattedAddress[0];
	            	} else {
	            		if (venue.locatio.address){
	            			info = info + ' - ' + venue.location.address;
	            		};
	            	};
	            };
	            info = info + '<br>';
	          };

	        // map the selected entities on the Google Maps map in the UI
	        self.mapEntity(clickedEntity, info);
			self.listEntities([entity]);

	    }).error(function() {
	      console.log('Forsquare Articles could not be loaded '); 

	      // map the selected entities on the Google Maps map in the UI
	      self.mapEntity(clickedEntity, info);
	      // list the entities in an unsorted list in the UI
		  self.listEntities([entity]);
	  	});

	};

	this.resetEntities = function() {
		var myLatlng = new google.maps.LatLng(42.424710, 25.627823);
		var mapOptions = {
		  zoom: 13,
		  center: myLatlng
		}

		map = new google.maps.Map(document.getElementById("map"), mapOptions);

		initialEntities.forEach(function(entity){
			self.entityList.push(new Entity(entity));

			var marker = new google.maps.Marker({
			    position: new google.maps.LatLng(entity.lat, entity.lan),
			    title: entity.title
			});

			// To add the marker to the map, call setMap();
			marker.setMap(map);
		});

		// map the selected entities on the Google Maps map in the UI
		self.mapEntities(initialEntities);
		// list the entities in an unsorted list in the UI
		self.listEntities(initialEntities);
	};
	
};

ko.applyBindings(new ViewModel());