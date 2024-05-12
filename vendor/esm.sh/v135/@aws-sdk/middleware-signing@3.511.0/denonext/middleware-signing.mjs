/* esm.sh - esbuild bundle(@aws-sdk/middleware-signing@3.511.0) denonext production */
import{memoize as y}from"/v135/@smithy/property-provider@2.1.1/denonext/property-provider.mjs";import{SignatureV4 as w}from"/v135/@smithy/signature-v4@2.1.1/denonext/signature-v4.mjs";import{normalizeProvider as f}from"/v135/@smithy/util-middleware@2.1.1/denonext/util-middleware.mjs";var S=3e5,T=e=>{let s=e.credentials?v(e.credentials):e.credentialDefaultProvider(Object.assign({},e,{parentClientConfig:e})),{signingEscapePath:i=!0,systemClockOffset:t=e.systemClockOffset||0,sha256:g}=e,r;return e.signer?r=f(e.signer):e.regionInfoProvider?r=()=>f(e.region)().then(async n=>[await e.regionInfoProvider(n,{useFipsEndpoint:await e.useFipsEndpoint(),useDualstackEndpoint:await e.useDualstackEndpoint()})||{},n]).then(([n,o])=>{let{signingRegion:a,signingService:c}=n;e.signingRegion=e.signingRegion||a||o,e.signingName=e.signingName||c||e.serviceId;let d={...e,credentials:s,region:e.signingRegion,service:e.signingName,sha256:g,uriEscapePath:i},m=e.signerConstructor||w;return new m(d)}):r=async n=>{n=Object.assign({},{name:"sigv4",signingName:e.signingName||e.defaultSigningName,signingRegion:await f(e.region)(),properties:{}},n);let o=n.signingRegion,a=n.signingName;e.signingRegion=e.signingRegion||o,e.signingName=e.signingName||a||e.serviceId;let c={...e,credentials:s,region:e.signingRegion,service:e.signingName,sha256:g,uriEscapePath:i},d=e.signerConstructor||w;return new d(c)},{...e,systemClockOffset:t,signingEscapePath:i,credentials:s,signer:r}},u=e=>{let s=e.credentials?v(e.credentials):e.credentialDefaultProvider(Object.assign({},e,{parentClientConfig:e})),{signingEscapePath:i=!0,systemClockOffset:t=e.systemClockOffset||0,sha256:g}=e,r;return e.signer?r=f(e.signer):r=f(new w({credentials:s,region:e.region,service:e.signingName,sha256:g,uriEscapePath:i})),{...e,systemClockOffset:t,signingEscapePath:i,credentials:s,signer:r}},v=e=>typeof e=="function"?y(e,s=>s.expiration!==void 0&&s.expiration.getTime()-Date.now()<S,s=>s.expiration!==void 0):f(e);import{HttpRequest as D,HttpResponse as E}from"/v135/@smithy/protocol-http@3.1.1/denonext/protocol-http.mjs";var l=e=>new Date(Date.now()+e);var h=(e,s)=>Math.abs(l(s).getTime()-e)>=3e5;var C=(e,s)=>{let i=Date.parse(e);return h(i,s)?i-Date.now():s};var O=e=>(s,i)=>async function(t){if(!D.isInstance(t.request))return s(t);let g=i.endpointV2?.properties?.authSchemes?.[0],r=g?.name==="sigv4a"?g?.signingRegionSet?.join(","):void 0,n=await e.signer(g),o,a={signingDate:l(e.systemClockOffset),signingRegion:r||i.signing_region,signingService:i.signing_service};if(i.s3ExpressIdentity){if(o=await n.signWithCredentials(t.request,i.s3ExpressIdentity,a),o.headers["X-Amz-Security-Token"]||o.headers["x-amz-security-token"])throw new Error("X-Amz-Security-Token must not be set for s3-express requests.")}else o=await n.sign(t.request,a);let c=await s({...t,request:o}).catch(m=>{let k=m.ServerTime??R(m.$response);throw k&&(e.systemClockOffset=C(k,e.systemClockOffset)),m}),d=R(c.response);return d&&(e.systemClockOffset=C(d,e.systemClockOffset)),c},R=e=>E.isInstance(e)?e.headers?.date??e.headers?.Date:void 0,A={name:"awsAuthMiddleware",tags:["SIGNATURE","AWSAUTH"],relation:"after",toMiddleware:"retryMiddleware",override:!0},N=e=>({applyToStack:s=>{s.addRelativeTo(O(e),A)}}),W=N;export{O as awsAuthMiddleware,A as awsAuthMiddlewareOptions,N as getAwsAuthPlugin,W as getSigV4AuthPlugin,T as resolveAwsAuthConfig,u as resolveSigV4AuthConfig};
//# sourceMappingURL=middleware-signing.mjs.map