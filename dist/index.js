"use strict";var d=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(n){throw r=0,n}}};var x=d(function($,j){"use strict";var F=require("@stdlib/ndarray-base-assert-is-row-major"),T=require("@stdlib/blas-ext-base-sfill").ndarray,k=require("@stdlib/blas-base-scopy").ndarray;function z(i,r,n,m,c,f,l,y,a,e,t,q){var s,v,u,w,o,g;if(i<=0||r<=0)return a;if(v=c,u=q,F([e,t])){for(o=0;o<i;o++){for(w=n[v],s=y,g=0;g<r;g++)a[u]=w,a[u+t]=f[s],s+=l,u+=e;v+=m}return a}for(o=0;o<i;o++)T(r,n[v],a,e,u),u+=r*e,v+=m;for(u=q+t,o=0;o<i;o++)k(r,f,l,y,a,e,u),u+=r*e;return a}j.exports=z});var P=d(function(X,E){"use strict";var A=require("@stdlib/blas-base-layout-resolve-str"),B=require("@stdlib/ndarray-base-assert-is-column-major-string"),R=require("@stdlib/strided-base-stride2offset"),G=require("@stdlib/math-base-special-fast-max"),h=require("@stdlib/string-format"),H=x();function I(i,r,n,m,c,f,l,y,a){var e,t,q,s,v;if(v=A(i),v===null)throw new TypeError(h("invalid argument. First argument must be a valid order. Value: `%s`.",i));if(B(v)){if(a<G(1,r*n))throw new RangeError(h("invalid argument. Ninth argument must be greater than or equal to max(1,%d). Value: `%d`.",r*n,a));e=1,t=a}else{if(a<2)throw new RangeError(h("invalid argument. Ninth argument must be greater than or equal to max(1,%d). Value: `%d`.",2,a));e=a,t=1}return q=R(r,c),s=R(n,l),H(r,n,m,c,q,f,l,s,y,e,t,0)}E.exports=I});var _=d(function(Y,V){"use strict";var J=require("@stdlib/utils-define-nonenumerable-read-only-property"),b=P(),K=x();J(b,"ndarray",K);V.exports=b});var Q=require("path").join,S=require("@stdlib/utils-try-require"),U=require("@stdlib/assert-is-error"),W=_(),p,C=S(Q(__dirname,"./native.js"));U(C)?p=W:p=C;module.exports=p;
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
