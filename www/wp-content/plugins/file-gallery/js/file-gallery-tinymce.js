(function() {
    tinymce.create('tinymce.plugins.file_gallery',
	{
        init : function(ed, url)
		{
			this.add_events(ed);
        },
		
		add_events : function( ed )
		{
			var $ = jQuery;
			
			if( "replycontent" != ed.id )
			{
				ed.onMouseDown.add( function(tinymce_object, mouseEvent)
				{
					wpActiveEditor = ed.id;

					if( mouseEvent.target.className.match(/wpGallery/) )
					{
						file_gallery.gallery_image_clicked[ed.id] = true;
	
						if( "" == mouseEvent.target.id )
						{
							mouseEvent.target.id = "file_gallery_tmp_" + file_gallery.tmp[ed.id];
							file_gallery.tmp[ed.id]++;
						}
	
						file_gallery.last_clicked_gallery[ed.id] = mouseEvent.target.id;
						
						// call tinymce_gallery with image title as argument (title holds gallery options)
						file_gallery.tinymce_gallery( mouseEvent.target.title );
					}
					else
					{
						// uncheck all items and serialize()
						if( true === file_gallery.gallery_image_clicked[ed.id] )
						{
							file_gallery.gallery_image_clicked[ed.id] = false;
							$("#file_gallery_uncheck_all").trigger("click");
						}
					}
				});
				
				
				ed.onMouseUp.add( function(tinymce_object, mouseEvent)
				{
					if ( tinymce.isIE && ! ed.isHidden() )
						ed.windowManager.insertimagebookmark = ed.selection.getBookmark(1);
				});
				
				
				ed.onEvent.add(function(ed, e)
				{
					if( 46 === e.keyCode && "keyup" == e.type && true === file_gallery.gallery_image_clicked[ed.id] )
					{
						$("#file_gallery_uncheck_all").trigger("click");
						file_gallery.gallery_image_clicked[ed.id] = false;
					}
				});	
				
				
				/*
				ed.onLoadContent.add( function(tiny, e)
				{
					$( ed.getDoc() ).bind("dragenter dragleave", function(e)
					{
						var b = ed.getBody(),
							d = $(b).parent(),
							style = 'position: absolute; top: 0; left: 0; width: ' + (d.width() - 20) + 'px; height: ' + (d.height() - 20) + 'px;';
						
						e.preventDefault();
						e.stopPropagation();
						
						if( "dragenter" == e.type && 0 === $( b ).children("#file_gallery_tinymce_upload").length )
						{							
							$( b )
								.css({position: "relative"})
								.append('<iframe id="file_gallery_tinymce_upload" style="' + style + '" src="http://localhost/wpcl/wp-admin/media-upload.php?post_id=555&TB_iframe=1&file_gallery=true" />');
						}
						else if( 0 < $( b ).children("#file_gallery_tinymce_upload").length )
						{
							var related = e.relatedTarget,
								inside = false;
						
							if( null === related ) // webkit
								related = e.target;
							
							// console.log(related);
							
							if( related !== this )
							{
								if( related )
								{
									if( $.contains(this, related) || $.contains($("#file_gallery_tinymce_upload"), related) )
										inside = true;
								}
							}
							else
							{
								if( null === e.relatedTarget ) // webkit
									inside = false;
							}
							
							if( ! inside )
								$( b ).children("#file_gallery_tinymce_upload").remove();
						}
						
						return false;
					});
				});
				*/	
			}
		},
		
        getInfo : function() {
            return {
                longname : "File Gallery",
                author : 'Bruno "Aesqe" babic',
                authorurl : "http://skyphe.org/",
                infourl : "http://skyphe.org/code/wordpress/file-gallery/",
                version : "1.7.5"
            };
        }
    });
	
    tinymce.PluginManager.add("file_gallery", tinymce.plugins.file_gallery);
})();