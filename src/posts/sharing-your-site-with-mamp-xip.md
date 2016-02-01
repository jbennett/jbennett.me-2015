---
title: Sharing Your Site With MAMP + xip.io
published: Feb 1, 2013
layout: blog.jade
---

Noah Stokes recently posted a [tutorial](http://esbueno.noahstokes.com/post/42930947028/test-your-local-web-sites-on-your-ipad-or-iphone-using) on how to access your development websites using MAMP Pro and [Tyler Hall](http://clickontyler.com/blog/2013/02/view-virtual-hosts-iphone-ipad) showed how to access multiple sites using VirtualHostX. Tyler’s suggestion certainly comes highly recommended, however, with a little elbow grease, you can do the same with MAMP Pro.

After your site is setup and accessable locally (http://website.dev for example), open MAMP Pro and go to the hosts page. Select the site you want to work with and in the aliases section enter “WHATEVER.IPADDRESS.xip.io”, replacing IPADDRESS with the IP address of your machine and WHATEVER with whatever you want. For example you can have website.192.168.2.10.xip.io. Click on apply, enter your password if needed and you should be able to access the site with the full (verbose) alias you created.

Clearly, especially with the companion iOS app, VirtualHostX makes this easier, but with a little elbow grease you can acheive the same results.

Now, a little background on what that xip.io thing is doing for you. This is a simple service that runs a DNS server mapping *.IP.xip.io to the ip address provided in the domain name. What this means is that when you type that address into your browser, you ask xip.io where we should go to load the page and xip.io replies with your local IP address. This is the magic glue that allows you to access multiple sites on a single port on a single machine from remote machines.
