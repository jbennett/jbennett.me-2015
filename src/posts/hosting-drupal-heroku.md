---
title: Hosting Drupal on Heroku
published: Nov 1, 2012
layout: blog.jade
---

So I have started looking at hosting some of our client’s website in the cloud. I’ve used Heroku a ton for our internal rails apps, but never for PHP apps. So far I’ve really only struggled with setting up the server config in a reliable way without exposing sensitive server settings globally. Listed below are the settings I use for pulling the DB connection string from the heroku environment variables.

<code class="language-php">
$databases = array();
$dbstring = $_ENV['HEROKU_POSTGRESQL_IVORY_URL'];
$regex = "/(.*?):\/\/(.*?):(.*?)@(.*?):(.*?)\/(.*?)$/";
preg_match($regex, $dbstring, $matches);
array_shift($matches);
// $type, $user, $password, $host, $port, $db

$databases['default']['default'] = array(
    'driver' => 'pgsql',
    'database' => $matches[5],
    'username' => $matches[1],
    'password' => $matches[2],
    'host' => $matches[3],
    'port' => $matches[4],
    'prefix' => '',
);
</code>

I still need to get the Amazon S3 module working for file storage, thats next!
