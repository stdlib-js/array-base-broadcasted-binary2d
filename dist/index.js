"use strict";var B=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(o){throw (r=0, o)}};};var w=B(function(F,p){
var l=require('@stdlib/array-base-broadcast-array/dist');function C(t,r,o){var y,b,j,k,s,u,d,e,x,n,c,f,q,z,S,i,a,v,m,A,g;if(i=r[2],s=i[1],u=i[0],!(s<=0||u<=0))for(v=l(t[0],r[0],i),m=v.data,a=v.strides,y=a[1],b=a[0],v=l(t[1],r[1],i),A=v.data,a=v.strides,j=a[1],k=a[0],g=t[2],n=0,f=0,e=0;e<u;e++){for(x=0,c=0,q=m[n],z=A[f],S=g[e],d=0;d<s;d++)S[d]=o(q[x],z[c]),x+=y,c+=j;n+=b,f+=k}}p.exports=C
});var D=w();module.exports=D;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
