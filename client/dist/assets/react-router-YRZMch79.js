import{r as a}from"./react-kKePHxyd.js";import{i as d,g as U,r as O,j as R,p as L,m as T,A as M,s as S,a as w}from"./@remix-run-pAEIRRw8.js";/**
 * React Router v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function y(){return y=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},y.apply(this,arguments)}const I=a.createContext(null),k=a.createContext(null),E=a.createContext(null),N=a.createContext(null),v=a.createContext({outlet:null,matches:[],isDataRoute:!1}),j=a.createContext(null);function le(t,e){let{relative:r}=e===void 0?{}:e;x()||d(!1);let{basename:n,navigator:l}=a.useContext(E),{hash:o,pathname:u,search:s}=W(t,{relative:r}),i=u;return n!=="/"&&(i=u==="/"?n:R([n,u])),l.createHref({pathname:i,search:s,hash:o})}function x(){return a.useContext(N)!=null}function b(){return x()||d(!1),a.useContext(N).location}function J(t){a.useContext(E).static||a.useLayoutEffect(t)}function z(){let{isDataRoute:t}=a.useContext(v);return t?re():_()}function _(){x()||d(!1);let t=a.useContext(I),{basename:e,navigator:r}=a.useContext(E),{matches:n}=a.useContext(v),{pathname:l}=b(),o=JSON.stringify(U(n)),u=a.useRef(!1);return J(()=>{u.current=!0}),a.useCallback(function(i,c){if(c===void 0&&(c={}),!u.current)return;if(typeof i=="number"){r.go(i);return}let f=O(i,JSON.parse(o),l,c.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:R([e,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[e,r,o,l,t])}const A=a.createContext(null);function V(t){let e=a.useContext(v).outlet;return e&&a.createElement(A.Provider,{value:t},e)}function ie(){let{matches:t}=a.useContext(v),e=t[t.length-1];return e?e.params:{}}function W(t,e){let{relative:r}=e===void 0?{}:e,{matches:n}=a.useContext(v),{pathname:l}=b(),o=JSON.stringify(U(n));return a.useMemo(()=>O(t,JSON.parse(o),l,r==="path"),[t,o,l,r])}function q(t,e){return G(t,e)}function G(t,e,r){x()||d(!1);let{navigator:n}=a.useContext(E),{matches:l}=a.useContext(v),o=l[l.length-1],u=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let i=b(),c;if(e){var f;let p=typeof e=="string"?L(e):e;s==="/"||(f=p.pathname)!=null&&f.startsWith(s)||d(!1),c=p}else c=i;let m=c.pathname||"/",C=s==="/"?m:m.slice(s.length)||"/",g=T(t,{pathname:C}),h=Z(g&&g.map(p=>Object.assign({},p,{params:Object.assign({},u,p.params),pathname:R([s,n.encodeLocation?n.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?s:R([s,n.encodeLocation?n.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),l,r);return e&&h?a.createElement(N.Provider,{value:{location:y({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:M.Pop}},h):h}function K(){let t=te(),e=w(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return a.createElement(a.Fragment,null,a.createElement("h2",null,"Unexpected Application Error!"),a.createElement("h3",{style:{fontStyle:"italic"}},e),r?a.createElement("pre",{style:l},r):null,o)}const Q=a.createElement(K,null);class X extends a.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error?a.createElement(v.Provider,{value:this.props.routeContext},a.createElement(j.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Y(t){let{routeContext:e,match:r,children:n}=t,l=a.useContext(I);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),a.createElement(v.Provider,{value:e},n)}function Z(t,e,r){var n;if(e===void 0&&(e=[]),r===void 0&&(r=null),t==null){var l;if((l=r)!=null&&l.errors)t=r.matches;else return null}let o=t,u=(n=r)==null?void 0:n.errors;if(u!=null){let s=o.findIndex(i=>i.route.id&&(u==null?void 0:u[i.route.id]));s>=0||d(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,i,c)=>{let f=i.route.id?u==null?void 0:u[i.route.id]:null,m=null;r&&(m=i.route.errorElement||Q);let C=e.concat(o.slice(0,c+1)),g=()=>{let h;return f?h=m:i.route.Component?h=a.createElement(i.route.Component,null):i.route.element?h=i.route.element:h=s,a.createElement(Y,{match:i,routeContext:{outlet:s,matches:C,isDataRoute:r!=null},children:h})};return r&&(i.route.ErrorBoundary||i.route.errorElement||c===0)?a.createElement(X,{location:r.location,revalidation:r.revalidation,component:m,error:f,children:g(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):g()},null)}var D=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(D||{}),P=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(P||{});function $(t){let e=a.useContext(I);return e||d(!1),e}function H(t){let e=a.useContext(k);return e||d(!1),e}function ee(t){let e=a.useContext(v);return e||d(!1),e}function F(t){let e=ee(),r=e.matches[e.matches.length-1];return r.route.id||d(!1),r.route.id}function te(){var t;let e=a.useContext(j),r=H(P.UseRouteError),n=F(P.UseRouteError);return e||((t=r.errors)==null?void 0:t[n])}function re(){let{router:t}=$(D.UseNavigateStable),e=F(P.UseNavigateStable),r=a.useRef(!1);return J(()=>{r.current=!0}),a.useCallback(function(l,o){o===void 0&&(o={}),r.current&&(typeof l=="number"?t.navigate(l):t.navigate(l,y({fromRouteId:e},o)))},[t,e])}function se(t){let{to:e,replace:r,state:n,relative:l}=t;x()||d(!1);let{matches:o}=a.useContext(v),{pathname:u}=b(),s=z(),i=O(e,U(o),u,l==="path"),c=JSON.stringify(i);return a.useEffect(()=>s(JSON.parse(c),{replace:r,state:n,relative:l}),[s,c,l,r,n]),null}function ue(t){return V(t.context)}function ne(t){d(!1)}function ce(t){let{basename:e="/",children:r=null,location:n,navigationType:l=M.Pop,navigator:o,static:u=!1}=t;x()&&d(!1);let s=e.replace(/^\/*/,"/"),i=a.useMemo(()=>({basename:s,navigator:o,static:u}),[s,o,u]);typeof n=="string"&&(n=L(n));let{pathname:c="/",search:f="",hash:m="",state:C=null,key:g="default"}=n,h=a.useMemo(()=>{let p=S(c,s);return p==null?null:{location:{pathname:p,search:f,hash:m,state:C,key:g},navigationType:l}},[s,c,f,m,C,g,l]);return h==null?null:a.createElement(E.Provider,{value:i},a.createElement(N.Provider,{children:r,value:h}))}function de(t){let{children:e,location:r}=t;return q(B(e),r)}new Promise(()=>{});function B(t,e){e===void 0&&(e=[]);let r=[];return a.Children.forEach(t,(n,l)=>{if(!a.isValidElement(n))return;let o=[...e,l];if(n.type===a.Fragment){r.push.apply(r,B(n.props.children,o));return}n.type!==ne&&d(!1),!n.props.index||!n.props.children||d(!1);let u={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(u.children=B(n.props.children,o)),r.push(u)}),r}export{E as N,ue as O,ce as R,z as a,b,W as c,se as d,ie as e,de as f,ne as g,le as u};
