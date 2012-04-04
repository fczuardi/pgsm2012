cd /home/nulo/www
cp -f pgsm.nulo.com.br/www/wp-config.php .
cp -f pgsm.nulo.com.br/www/.htaccess .htaccess-wp
cp -Rf pgsm.nulo.com.br/www/wp-content/uploads/2011 .
cp -Rf pgsm.nulo.com.br/www/wp-content/uploads/userphoto .
rm -rf pgsm.nulo.com.br
git clone git://github.com/fczuardi/pgsm.git pgsm.nulo.com.br
cd pgsm.nulo.com.br/www/wp-content/themes/
git clone git://github.com/fczuardi/pgsm-boilerplate-child.git
cd /home/nulo/www
cp -f wp-config.php pgsm.nulo.com.br/www/.
cp -f .htaccess-wp pgsm.nulo.com.br/www/.htaccess
cp -Rf ./2011 pgsm.nulo.com.br/www/wp-content/uploads/.
cp -Rf ./userphoto pgsm.nulo.com.br/www/wp-content/uploads/.
chmod -R 755 pgsm.nulo.com.br