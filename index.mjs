// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-broadcast-array@esm/index.mjs";function r(r,s,t){var d,e,i,o,f,n,m,b,c,j,l,p,h,u,v,x,y,g,k,q,w;if(f=(x=s[2])[1],n=x[0],!(f<=0||n<=0))for(k=(g=a(r[0],s[0],x)).data,d=(y=g.strides)[1],e=y[0],q=(g=a(r[1],s[1],x)).data,i=(y=g.strides)[1],o=y[0],w=r[2],j=0,p=0,b=0;b<n;b++){for(c=0,l=0,h=k[j],u=q[p],v=w[b],m=0;m<f;m++)v[m]=t(h[c],u[l]),c+=d,l+=i;j+=e,p+=o}}export{r as default};
//# sourceMappingURL=index.mjs.map
