"use strict";var B=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var p=B(function(F,l){
var g=require('@stdlib/array-base-broadcast-array/dist');function C(t,r,w){var f,y,b,j,o,s,d,e,u,x,n,c,k,q,z,i,a,v,S,m,A;if(i=r[2],o=i[1],s=i[0],!(o<=0||s<=0))for(v=g(t[0],r[0],i),S=v.data,a=v.strides,f=a[1],y=a[0],v=g(t[1],r[1],i),m=v.data,a=v.strides,b=a[1],j=a[0],A=t[2],x=0,c=0,e=0;e<s;e++){for(u=0,n=0,k=S[x],q=m[c],z=A[e],d=0;d<o;d++)z[d]=w(k[u],q[n]),u+=f,n+=b;x+=y,c+=j}}l.exports=C
});var D=p();module.exports=D;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
