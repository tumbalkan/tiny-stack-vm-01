import{mkdirSync as a,readdirSync as b,readFileSync as c,writeFileSync as d}from"node:fs";
const T="#4d')-.2        ,,,,,,,(,,,(,,, ,,,             CGGC#           (+              ''$'";
function run(p,q){
 let F=a=>new Int32Array(a),D=F(256),C=F(64),M=F(256),O=new Uint8Array(65536),s=0,t=0,l=0,i=0,x=0,n=0;
 let E=e=>[O.slice(0,l),e];
 for(;;){
  if(n==1e6)return E(10);
  if(x<0||x>=p.length)return E(9);
  let o=p[x],v=T.charCodeAt(o)-35;
  if(!(v>=0))return E(5);
  let m=v>>4,y=(v>>2)&3,z=v&3;
  if(x+m>=p.length)return E(9);
  n++;
  let g=x+1+m;
  if(s<y||s-y+z>256)return E(s<y?2:3);
  x=g;
  switch(o){
   case 0:return E(0);
   case 1:D[s++]=(p[g-1]<<24)>>24;break;
   case 2:D[s++]=p[g-4]|p[g-3]<<8|p[g-2]<<16|p[g-1]<<24;break;
   case 3:s--;break;
   case 4:D[s]=D[s-1];s++;break;
   case 5:D[s-1]=D[s-2]+(D[s-2]=D[s-1],0);break;
   case 6:D[s]=D[s-2];s++;break;
   case 7:D[s-1]=D[s-3]+(D[s-3]=D[s-2],D[s-2]=D[s-1],0);break;
   case 23:D[s-1]=-D[s-1]|0;break;
   case 27:D[s-1]=~D[s-1];break;
   case 48:case 49:case 50:if(o==48||(o==49)==(D[--s]==0))x=g+(p[g-2]|p[g-1]<<24>>16);break;
   case 51:if(t==64)return E(7);C[t++]=g;x=p[g-2]|p[g-1]<<8;break;
   case 52:if(!t)return E(8);x=C[--t];break;
   case 64:case 65:{let a=D[s-1];if(a<0||a>255)return E(6);o==64?D[s-1]=M[a]:(s-=2,M[a]=D[s]);break;}
   case 80:{let B=Buffer.from(D[s-1]+"");if(l+B.length>65536)return E(11);s--;O.set(B,l);l+=B.length;break;}
   case 81:if(l>65535)return E(11);O[l++]=D[--s]&255;break;
   case 82:D[s++]=i<q.length?q[i++]:-1;break;
   case 83:return E(D[--s]&255);
   default:{
    let B=D[s-1],A=D[s-2],U=A>>>0,V=B>>>0,K=B&31,r;
    if(o>18&&o<23&&B==0)return E(4);
    r=o<18?A+(o==16?B:-B)|0:o==18?Math.imul(A,B):o==19?A==1<<31&&B==-1?A:(A/B)|0:o==20?B==-1?0:A%B|0:o==21?U/V|0:o==22?U%V|0:o==24?A&B:o==25?A|B:o==26?A^B:o==28?A<<K:o==29?A>>K:o==30?A>>>K|0:o==32?A==B?1:0:o==33?A<B?1:0:U<V?1:0;
    s-=2;D[s++]=r;
   }
  }
 }
}
let v=process.env,I=v.MAKEFUN_INPUT_DIR??"/input",J=v.MAKEFUN_OUTPUT_DIR??"/output";
for(let k of b(I)){let[r,e]=run(c(I+"/"+k+"/program.bin"),c(I+"/"+k+"/input.bin"));a(J+"/"+k,{recursive:!0});d(J+"/"+k+"/stdout.bin",r);d(J+"/"+k+"/exit.txt",e+"");}
