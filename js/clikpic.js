window.thumbnails = {};
thumbnails[14893426] = clik.newPhoto({"galleries_id":"","server_id":68,"src":"2_thumb._Carloway_Crofts1.jpg","link":"#","width":160,"id":14893426,"height":160,"caption":"2. Carloway Crofts"}, 1);
thumbnails[14923297] = clik.newPhoto({"galleries_id":"","server_id":68,"src":"Seann_Taigh_Niall_oil_on_board_400x400mm_thumb.JPG","link":"#","width":160,"id":14923297,"height":160,"caption":"Seann Taigh Niall oil on board 400x400mm"}, 1);
thumbnails[14937747] = clik.newPhoto({"galleries_id":"","server_id":68,"src":"First_Flowers_of_Spring_on_the_Croft_cropped_1_thumb.jpg","link":"#","width":160,"id":14937747,"height":160,"caption":"First Flowers of Spring on the Croft cropped"}, 1);
thumbnails[14923298] = clik.newPhoto({"galleries_id":"","server_id":68,"src":"Catching_the_morning_light_cropped_thumb.jpg","link":"#","width":160,"id":14923298,"height":160,"caption":"Catching the morning light cropped"}, 1);
thumbnails[14923590] = clik.newPhoto({"galleries_id":"","server_id":68,"src":"Towards_the_Morning_Light_oil_on_canvas_700x700mm_thumb.JPG","link":"#","width":160,"id":14923590,"height":160,"caption":"Towards the Morning Light oil on canvas 700x700mm"}, 1);
thumbnails[14923291] = clik.newPhoto({"galleries_id":"","server_id":68,"src":"Moonlight_on_Benside_oil_on_canvas_700x700mm_thumb.JPG","link":"#","width":160,"id":14923291,"height":160,"caption":"Moonlight on Benside (oil on canvas) 700x700mm"}, 1);
thumbnails[14923299] = clik.newPhoto({"galleries_id":"","server_id":68,"src":"A_new_day_dawning_oil_on_canvas_500x500mm_thumb.JPG","link":"#","width":160,"id":14923299,"height":160,"caption":"A new day dawning oil on canvas 500x500mm"}, 1);
thumbnails[14923595] = clik.newPhoto({"galleries_id":"","server_id":68,"src":"Washing_Day_at_Lilac_Cottage_oil_on_canvas_700x700mm_thumb.JPG","link":"#","width":160,"id":14923595,"height":160,"caption":"Washing Day at Lilac Cottage (oil on canvas) 700x700mm"}, 1);
thumbnails[14937749] = clik.newPhoto({"galleries_id":"","server_id":68,"src":"Fresh_Blooms_after_the_Rain_oil_on_canvas_500x700mm_1_thumb.JPG","link":"#","width":160,"id":14937749,"height":160,"caption":"Fresh Blooms after the Rain (oil on canvas) 500x700mm"}, 1);
thumbnails[14923300] = clik.newPhoto({"galleries_id":"","server_id":68,"src":"Pinks_in_the_Warming_Sun_thumb.JPG","link":"#","width":160,"id":14923300,"height":160,"caption":"Pinks in the Warming Sun"}, 1);

/***************************************************************************
* Create the array of Gallery objects                                      *
***************************************************************************/
var galleries = new Object();
/***************************************************************************
* Create the array of image sets                                           *
***************************************************************************/
var imageSets = {};
imageSets[1] = '14937749,14937747,14923595,14923590,14923300,14923299,14923298,14923297,14923291,14893426';
imageSets[2] = '';
imageSets[3] = '14937749,14937747,14923595,14923590,14923300,14923299,14923298,14923297,14923291,14893426';
imageSets[4] = '14937749,14937747,14923595';
imageSets[269052] = '';
imageSets[268692] = '';
imageSets[268691] = '';
 /***************************************************************************
* Get a server path given an ID                                            *
***************************************************************************/
function getServerPath(server_id, thumbnail) {
	var val = -1;
	return 'images';
}

/***************************************************************************
* img = reference to image object in which to show image                   *
***************************************************************************/
function showHomeImage(img) {
	imageID = randomListVal('');
	if (!basic) {
		img.src = photos[imageID].src;
		img.width = photos[imageID].width;
		img.height = photos[imageID].height;
		img.parentNode.title = img.alt = photos[imageID].caption;
	} else {
		newImage = new Image(photos[imageID].width,photos[imageID].height);
		newImage.src = photos[imageID].src;
		document.images[img.name] = newImage;
		
	}
}

function getHomeImageLink(imageID) {
  	var href='', photo = (backgrounds || photos || {})[imageID];
	if(photo){
		if (photo && photo.galleries_id != '') {
  			href = photo.fnGalleryLink();
  		}
  		  		else {
  				href += '.html';
  	  		}
	}
    return href;
}

/***************************************************************************
* Show a random image on home page from featured images                    *
***************************************************************************/
function showHomeImageInline(el, image_sets_id, href) {
	
	var css = {}, imageID,
	    imageSetsId = 1;
	if(image_sets_id){
		imageSetsId = image_sets_id;
	}
	imageID = randomListVal(imageSets[imageSetsId]);
	if (href == null && '' != '') {
					href = getHomeImageLink(imageID);
	}
	
	updateImage({nextPhoto: backgrounds[imageID], img:el.find('img')[0],
                $photo:el, $title:$('#homeimageTitleContainer'), $detail:$('#homeimageDetailsContainer'),                speed:0, href:href, css:css, onAfter: function(){                  this.closest('.contentsection').doManualAlign({				    inner: 'img',				    crop: 'a'				  });                }              });
}

/***************************************************************************
* Set 'img' to be a new image given its photo() object                     *
***************************************************************************/
function updateImage (options) {
	var defaults = {			nextPhoto:'', 			field:'', 			img:'',			$photo:'', 			$title:'', 			$detail:'', 			$detailContainer:'',  
			updateDocumentTitle:false, 			speed:0, 			href:false, 			css:false, 			updateHash:false, 			updateHashHistory:true,			onAfter:null,			onBefore:null, 			changeImage:true, 			afterFade:null, 			transitionMode:'fade_dissolve'		},
		op = $.extend({},defaults,options),
		html = '', temp = '',
		photoId = op.nextPhoto.id,
		photoCaption = ''+op.nextPhoto.caption,
		$containers = $(),heights = {}, 
 		photoSrc = op.nextPhoto.src,
		newPhotoDimensions = {}, 
 		checkIsInContainer = function( $el ) {
			var cont = $el.closest('.contentsection-container');
			if( cont.length ) {
				$containers = $containers.add(cont);
				if( !(cont.attr('id') in heights) ) {
					heights[cont.attr('id')] = cont.height();
				}
			};
			return cont.length;
		};
	if (op.updateHash && clik.getIDInUrl(location.href,'photo') != op.nextPhoto.id && op.$photo.is(':visible')) {
		clik.changeHash('photos_id=' + op.nextPhoto.id, op.updateHashHistory);
	}
		
		op.transitionMode = op.transitionMode.replace('fade_', ''); 
        if (op.updateDocumentTitle) {
				  document.title = 'Hebrides paintings, art by Margaret Stevenson: ' + photoCaption;
			    }
        if( op.$detailContainer != '' )	 {   
  	    $(op.$detailContainer).find('.replaceable[class*=replaceable_photo-]').each(function(){
	    	var field = clik.getPrefixedClass(this.className, 'replaceable_photo-'),
				dontSlide;
			if( field == 'photo_caption' ) field = 'caption'; 
	    	if (field in op.nextPhoto) {
				dontSlide = checkIsInContainer($(this));
	    		$(this).fadeGalleryDetails(op.nextPhoto[field], op.speed,false,dontSlide);
	    	}
	    }).end().find('.replaceable_paymentBuyLink').each(function(){
			var dontSlide = checkIsInContainer($(this));
			$(this).fadeGalleryDetails(op.nextPhoto.fnGetPaymentInfo(), op.speed, function(){
			  if (typeof(backgrounds) != 'undefined' && op.nextPhoto == backgrounds[op.nextPhoto.id]) {
				toggleAddToCartConfirm(backgrounds, op.$detailContainer);
			  } else if (typeof(photos) != 'undefined' && op.nextPhoto == photos[op.nextPhoto.id]) {
				toggleAddToCartConfirm(photos, op.$detailContainer);
			  }
			},dontSlide)
		});
    } 
	if( $containers.length ) { 
		$containers.each(function(){ 
			var $c = $(this),
				h = $c.show().height();
			if( $c.find('div.contentsection:not(.empty)').length ) { 
				if( op.$photo.closest('.contentsection').data('hideOverlays') ) { 
					$c.hide(); 
				} else { 
					$c.height(heights[$c.attr('id')]);
					$c.animate({height:h},op.speed,function(){$c.height('');});
				} 
			} else { 
				$c.slideUp(op.speed); 
			} 
		});
	};
	newPhotoDimensions.width = op.nextPhoto.width; 
	newPhotoDimensions.height = op.nextPhoto.height; 
			newPhotoDimensions.csWidth = op.$photo.closest('.contentsection').hasClass('clikAlign-Hfit') ? op.$photo.closest('.contentsection').parent().width() : op.$photo.width(); 
				if( 500 > $(window).width() && newPhotoDimensions.width > newPhotoDimensions.csWidth ) { 
			newPhotoDimensions.width = newPhotoDimensions.csWidth; 
			newPhotoDimensions.height = op.nextPhoto.height * newPhotoDimensions.width/op.nextPhoto.width; 
		} 
			if (op.$photo.length > 0 && op.changeImage) {
		html = $('<img/>',{
			'class': 'mainphoto photo',
			src: photoSrc,
			id: 'mainPic',
			name: 'mainPic',
			width: newPhotoDimensions.width,
			height: newPhotoDimensions.height,
			alt: photoCaption,
			css: op.css || {}
		});
		if (op.href) {
			if (op.href.match(/<a/)) {
				html = $(op.href).append(html);
			} else {
				html = $('<a/>', {
					href: op.href,
					title: photoCaption
				}).append(html);
			}
		} else {
			html = $('<a/>', {
				title: photoCaption
			}).append(html);
		}
		if (op.speed == 0) { 
			op.$photo.html(html); 
			if (op.onBefore) { 
			  	op.onBefore.apply(op.$photo); 
			} 
			if (op.onAfter) { 
			  	op.onAfter.apply(op.$photo); 
			} 
		} else { 
			op.$photo.stop(true,true).fadeReplaceWith(html,op.speed,op.transitionMode,function(){   
				if (op.onAfter) { 
				  	op.onAfter.apply(this); 
				} 
				clik.doColumnResize(false, $(this)); 
			}, op.onBefore,op.afterFade||function(){});
		} 
	}
    if (op.field) {
		op.field.value = photoId;
	} else {
		op.$photo.data('image_id', photoId);
    }
        if (!op.speed) {
      	clik.doColumnResize(false, op.$photo);
    }
         return html;
	}

/***************************************************************************
* Toggle add to cart confirmation element and set up the click event for   *
* the 'Add to cart' button.                                                *
***************************************************************************/
function toggleAddToCartConfirm(array, root){
	if (typeof(array) !== 'object' || array === null) {
	  	array = photos;
	}
	if (!$(root).length) {		root = $('body');	}	if($('#paymentConfirm', root).length > 0){
		$('#paymentConfirm', root).hide();
		$('#paymentAddButton', root)
		.unbind()
		.click(function(){
						form = $('#paymentForm', root)[0];
			option_id = 0;
			if(form.item_option.value){
				option_id = form.item_option.value;
			}
			if(addItemToBasket(form.item_number.value,array,form.site.value,parseInt(form.quantity.value, 10),option_id,form.item_type.value)){
				if($.browser.msie){$('#paymentConfirm', root).text('Item added to cart').show();}
				else{
					$('#paymentConfirm', root).text('Item added to cart').fadeIn();
				}
				dspOrderDetails(form.site.value);
				if ($('#cartDiv').length) {					writeCartTable(arrayOfItems);				}
			}
			else{
				$('#paymentConfirm', root).text('Item not added - check cookies are enabled in your browser.').fadeIn();
			}
		});
	}
}

/***************************************************************************
* Get payment info for image - add as 'method' to photo object             *
***************************************************************************/
clik.photo.fnGetImageDetails = function(){
	var temp = '';
	if (this.description != '') {
		temp +=  '<div id="imageDescription">' + this.description + '</div>';
	}
		if (this.photo_ref != '') {
		temp += '<div class="imageinfo" id="imageRef"><strong>Ref: </strong>' + this.photo_ref + '</div>';
	}
		if (this.takendate != '') {
		
		temp += '<div class="imageinfo" id="imageDate"><strong>Date: </strong>' + this.takendate + '</div>';
	}
	
	if (this.location != '') {
		
		temp += '<div class="imageinfo" id="imageLocation"><strong>Location: </strong>' +  this.location + '</div>';
	}
	
	if (this.photographer != '') {
		
		temp += '<div class="imageinfo" id="imagePhotographer"><strong>Photographer: </strong>' + this.photographer + '</div>';
	}
			
				if (temp != '') {
		temp += '<div class="spacer"></div>';
	}
	return temp;
};

/***************************************************************************
* Get payment info for image - add as 'method' to photo object             *
***************************************************************************/
clik.photo.fnGetPaymentInfo = function(){
	var temp = '';
	if (this.item_price !== '') {
				temp += '<p>Order this print:</p>';
				temp += '<div class="imageinfo" id="imagePrice"><strong>' + this.purchase_instruction + '</strong> ' + (this.item_price).toFixed(2) + '</div>';
		var item_name  = this.purchase_instruction;
		var amount = (this.item_price).toFixed(2);
		var item_option  = 0;
	}
		else {
		
	}
	if (this.item_price !== '') {
			temp += '<div class="clearing">&nbsp;</div>';
	}
	return temp;};

/***************************************************************************
* Pick a photo at random from the featured images of a gallery.            *
* Gallery_id = id of gallery to choose,                                    *
* img = reference to html image in                                         *
* which to show image                                                      *
***************************************************************************/
function showGalleryImage(gallery_id, img, updateLink) {
	
	if(img && !$(img).hasClass('no_image')){
		if (location.hash.match('galleries_id=' + gallery_id) && (imageID = location.hash.match('.*photos_id=(.+)$'))) {
		  	imageID = imageID[1];
		} else {
		  	imageID = randomListVal(galleries[gallery_id].featured_images);
		}
		
		if (imageID != 0) {
			if( !isNaN(parseInt(imageID)) && isFinite(imageID) ) { //ID is numeric (i.e. we have a proper image id) 
				img.src = thumbnails[imageID].src;
				img.width = thumbnails[imageID].width;
				img.height = thumbnails[imageID].height;
			} else {//ID is not numeric (i.e. we have a gallery heading image defined with src, width & height)
				img.src = galleries[gallery_id].photo_thumbnail;
				img.width = galleries[gallery_id].photo_thumbnail_width;
				img.height = galleries[gallery_id].photo_thumbnail_height;
			}			img.alt = galleries[gallery_id].title;
			if (updateLink) {
				$(img).parent().attr({					title: galleries[gallery_id].title				}).filter(function(){return this.href;}).attr({					href: thumbnails[imageID].fnGalleryLink(gallery_id)				});
			}
		}
	}
}

/***************************************************************************
* If we have dynamic HTML, replace the galleries link with a list that     *
* doesn't include thecurrent gallery                                       *
***************************************************************************/
function showGalleries(gallery_id) {
		
	
	if (!basic) {
		temp = '';
		for (i = 0; i < galleries.length; i++) {
						
			
			if (galleries[i].id != gallery_id) {
								
				if (temp != '') {
					temp += ' | ';
				}
								temp += '<a href="' + galleries[i].section_code + '_' + galleries[i].id + '.html">' + galleries[i].title + '</a>';
							}
		}
		document.all.galleryLinks.innerHTML = 'Other galleries: ' + temp;
	}
}

		
