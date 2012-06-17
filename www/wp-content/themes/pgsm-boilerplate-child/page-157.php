<?php
/**
 * 
 * 
 * @package WordPress
 * @subpackage Boilerplate
 * @since Boilerplate 1.0
 */

get_header(); ?>

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
				<?php if ( is_front_page() ) { ?>
					<h2 class="entry-title"><?php the_title(); ?></h2>
				<?php } else { ?>	
				<?php } ?>
					<div class="entry-content">
						<form action="<?php echo get_permalink( get_the_ID() ); ?>" method="POST" accept-charset="utf-8">
              <h1 class="entry-title com-subtitulo"><?php _e('Dissertações e Teses', 'pgsm-boilerplate-child');?></h1>
              <h2><?php _e('Busca', 'pgsm-boilerplate-child');?></h2>
              <input type="text" name="query" value="<?php echo $_POST["query"];?>" />
              <input type="submit" value="<?php _e('Buscar', 'pgsm-boilerplate-child');?>" />
              <h2><?php _e('Procurar em', 'pgsm-boilerplate-child');?></h2>
              <div id="filtros-busca">  
                <div class="col1">
                  <label><input checked type="checkbox" name="sb_mestrado" /> <?php _e('mestrado', 'pgsm-boilerplate-child');?></label>
                  <label><input checked type="checkbox" name="sb_doutorado" /> <?php _e('doutorado', 'pgsm-boilerplate-child');?></label>
                </div>
                <div class="col2">
                  <label><input checked type="checkbox" name="sb_autor" /> <?php _e('autor', 'pgsm-boilerplate-child');?></label>
                  <label><input checked type="checkbox" name="sb_titulo" /> <?php _e('título', 'pgsm-boilerplate-child');?></label>
                  <label><input checked type="checkbox" name="sb_orientador" /> <?php _e('orientador', 'pgsm-boilerplate-child');?></label>
                </div>
                <div class="col3">
                  <h2><label><?php _e('Entre os Anos de', 'pgsm-boilerplate-child');?></label></h2>
                  <p>
                    <?php
                      $ano_first = (isset($_POST["sb_first"])) ? $_POST["sb_first"] : "first";
                      $ano_last = (isset($_POST["sb_last"])) ? $_POST["sb_last"] : "last";
                    ?>
                    <select name="sb_first">
                      <?php echo do_shortcode('[year_option_list selected="'.$ano_first.'"]'); ?>
                    </select>
                    <?php _e('e', 'pgsm-boilerplate-child');?>
                    <select name="sb_last">
                      <?php echo do_shortcode('[year_option_list selected="'.$ano_last.'"]'); ?>
                    </select>
                  </p>
                </div>
              </div>
            </form>
            <div class="layer-shadow"><hr /></div>
            
            <?php 
              
            if (isset($_POST["query"])) {
              // Se existir query para buscar:
              // - muda titulo,
              // - pega todos resultados para o gallery shortcut paginar
              echo "<h2>"; _e('Publicações encontradas', 'pgsm-boilerplate-child'); echo "</h2>";
              
              global $wpdb; // Necessario para fazer query com SQL
              
              // Variavel do formulario para fazer a query
              $query_string = $_POST["query"];
              
              
              $custom_meta_query = array('relation' => 'OR');
              if (isset($_POST["sb_autor"])) {
                array_push($custom_meta_query, array('key' => '_autor', 'value' => $query_string, 'compare' => 'LiKE'));
              }
              if (isset($_POST["sb_orientador"])) {
                array_push($custom_meta_query, array('key' => '_orientadores', 'value' => $query_string, 'compare' => 'LIKE'));
              }
              $args = array('post_type' => 'attachment','posts_per_pages' => -1, 'post_parent' => $post->ID, 'meta_query' => $custom_meta_query); 
              
              $gallery_ids = array();
              
              $attachments = get_posts($args);
              
              if ($attachments){
                foreach ($attachments as $attachment) {
                  echo $attachment->ID.' ';
                  array_push($gallery_ids, $attachment->ID);
                } 
                $gallery_include = implode(',', $gallery_ids);
              	echo do_shortcode('[gallery include="'.$gallery_include.'" link="file" limit="10" paginate="true" template="pgsm-doc-gallery" columns="0"]');
              }
              else {
                // Sem publicacoes encontradas
                echo _e('Não foi encontrada nenhuma publicação.', 'pgsm-boilerplate-child');
              }
            }
            else {
              // Formulario vazio, exibe ultimas 10 publicacoes
              echo "<h2>"; _e('Últimas Publicações', 'pgsm-boilerplate-child'); echo "</h2>";
              echo do_shortcode('[gallery link="file" limit="10" paginate="true" template="pgsm-doc-gallery" columns="0"]');
            }
 
            ?>				
						
						<?php wp_link_pages( array( 'before' => '' . __( 'Pages:', 'boilerplate' ), 'after' => '' ) ); ?>
  					<?php if(function_exists('wp_print')) { ?>
  					  <div class="print-button">
  					  <?php print_link(); ?>
					    </div>
					  <?php } ?> 
					</div><!-- .entry-content -->
				</article><!-- #post-## -->
<?php endwhile; ?>




<?php get_footer(); ?>