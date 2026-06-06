"use strict";var d=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var x=d(function($,j){"use strict";var F=require("@stdlib/ndarray-base-assert-is-row-major"),T=require("@stdlib/blas-ext-base-sfill").ndarray,k=require("@stdlib/blas-base-scopy").ndarray;function z(e,r,u,c,l,f,s,y,a,i,o,q){var t,m,n,w,v,g;if(e<=0||r<=0)return a;if(m=l,n=q,F([i,o])){for(v=0;v<e;v++){for(w=u[m],t=y,g=0;g<r;g++)a[n]=w,a[n+o]=f[t],t+=s,n+=i;m+=c}return a}for(v=0;v<e;v++)T(r,u[m],a,i,n),n+=r*i,m+=c;for(n=q+o,v=0;v<e;v++)k(r,f,s,y,a,i,n),n+=r*i;return a}j.exports=z});var P=d(function(X,E){"use strict";var A=require("@stdlib/blas-base-assert-is-layout"),B=require("@stdlib/ndarray-base-assert-is-column-major-string"),R=require("@stdlib/strided-base-stride2offset"),G=require("@stdlib/math-base-special-fast-max"),h=require("@stdlib/string-format"),H=x();function I(e,r,u,c,l,f,s,y,a){var i,o,q,t;if(!A(e))throw new TypeError(h("invalid argument. First argument must be a valid order. Value: `%s`.",e));if(B(e)){if(a<G(1,r*u))throw new RangeError(h("invalid argument. Ninth argument must be greater than or equal to max(1,%d). Value: `%d`.",r*u,a));i=1,o=a}else{if(a<2)throw new RangeError(h("invalid argument. Ninth argument must be greater than or equal to max(1,%d). Value: `%d`.",2,a));i=a,o=1}return q=R(r,l),t=R(u,s),H(r,u,c,l,q,f,s,t,y,i,o,0)}E.exports=I});var _=d(function(Y,V){"use strict";var J=require("@stdlib/utils-define-nonenumerable-read-only-property"),b=P(),K=x();J(b,"ndarray",K);V.exports=b});var Q=require("path").join,S=require("@stdlib/utils-try-require"),U=require("@stdlib/assert-is-error"),W=_(),p,C=S(Q(__dirname,"./native.js"));U(C)?p=W:p=C;module.exports=p;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
