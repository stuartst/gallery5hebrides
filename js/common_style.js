if (!window.clik) {window.clik = {};}
		clik.doColumnResize = function(skip,el){
							if( $(window).width() <= 500 ) {					resizeImages($('body'),500); 
					$('.contentsection-articles .contentitemArticle .adjustImageOffset').css({'margin-left':'','margin-right':''});				}
						$('body').clikAlign(true,true);
			clik.elementCache('#maincol_bottom').height('');clik.elementCache('div.contentcolumn').equaliseHeights();
clik.elementCache('div.contentsection-submenu').trigger('reposition');
clik.elementCache('#headerContent').clikFixContainerHeight(false,el);
clik.elementCache('#header').clikFixContainerHeight(false,el);
clik.elementCache('#content,#footer').clikFixContainerHeight(false,el);
clik.elementCache('#maincol_bottom:last-child').height(function(){return $(this).parent().height() - this.offsetTop;});$('.contentsection-popup_container').trigger('reposition');clik.elementCache('body').trigger('clikUpdate');

				$('.hasBackstretch').each(function(){
					$(this).data('backstretch').resize();
				});
						if ($.browser.msie && $.browser.version < 8) {				var temp = $('.csContainer,.csContainer>.contentsection').css('position','relative');				temp.css('position','');			}
		};
				clik.doWindowResize = function(){						if( $(window).width() <= 500 ) {				$('#main_menu_mobile .hascSelect').clikSelectMenu('reposition');				resizeImages($('body'),500);				$('.contentsection-articles .contentitemArticle .adjustImageOffset').css({'margin-left':'','margin-right':''});			}; 		
		};		
