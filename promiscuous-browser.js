/**@license MIT-promiscuous library-©2013 Ruben Verborgh*/
!function(n,t){function r(n,t){return(typeof t)[0]==n}function e(o,f){return f=function i(h,l,a,s,p,y){function j(n){return function(t){p&&(p=0,i(r,n,t))}}if(s=i.q,h!=r)return e(function(n,t){s.push({p:this,r:n,j:t,1:h,0:l})});if(a&&r(n,a)|r(t,a))try{p=a.then}catch(m){l=0,a=m}if(r(n,p))try{p.call(a,j(1),l=j(0))}catch(m){l(m)}else{for(y=0;y<s.length;)p=s[y++],r(n,h=p[l])?c(p.p,p.r,p.j,a,h):(l?p.r:p.j)(a);f=u(o,a,l)}},f.q=[],o.call(o={then:function(n,t){return f(n,t)}},function(n){f(r,1,n)},function(n){f(r,0,n)}),o}function u(t,u,o){return function(f,i){return r(n,f=o?f:i)?e(function(n,t){c(this,n,t,u,f)}):t}}function c(e,u,c,o,f){setTimeout(function(){try{o=f(o),f=o&&r(t,o)|r(n,o)&&o.then,r(n,f)?o==e?c(new TypeError):f.call(o,u,c):u(o)}catch(i){c(i)}})}Promise=e,e.resolve=function(n,t){return(t={}).then=u(t,n,1),t},e.reject=function(n,t){return(t={}).then=u(t,n,0),t}}("f","o");