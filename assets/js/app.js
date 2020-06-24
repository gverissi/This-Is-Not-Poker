class Combo{constructor(){this.handName=""}static factory(e){return new(Combo.comboName(e))(e)}static comboName(e){for(let t=0;t<COMBOS_LIST.length-1;t++){let a=COMBOS_LIST[t];if(a.isValid(e))return a}return COMBOS_LIST[COMBOS_LIST.length-1]}getCards(e,t){let a=[];return t.forEach(t=>{a.push(this.whereValueOccures(e,t))}),a.flat().slice(0,5)}whereValueOccures(e,t){let a=Object.keys(e).map(a=>e[a].length==t?e[a]:null).filter(Boolean);return a=this.orderCards(a.flat()),2==t&&a.length>4&&(a=a.slice(0,4)),a}orderCards(e){return e.slice(0,e.length).sort((e,t)=>{let a=new Card(t).valueScore()-new Card(e).valueScore();return 0!=a?a:new Card(t).typeScore()-new Card(e).typeScore()})}compareCombos(e,t){return[e,t].sort((e,t)=>{let a=t.getHandScore()-e.getHandScore();if(0!=a)return a;for(let a=0;a<e.getHand().length;a++){let r=new Card(t.getHand()[a]).valueScore()-new Card(e.getHand()[a]).valueScore();if(0!=r)return r;if(a==e.getHand().length-1){let r=new Card(t.getHand()[a]).typeScore()-new Card(e.getHand()[a]).typeScore();if(0!=r)return r}}return 0})[0]}areHandsEqual(e,t){return e.length===t.length&&e.every((e,a)=>{let r=new Card(e),n=new Card(t[a]);return r.value()===n.value()})}getHandName(){return this.handName}}class StraightFlush extends Combo{constructor(e){super(),this.player=e}static isValid(e){if(Flush.isValid(e)){let t=(new Combo).getCards(e.typeOcc,[7,6,5]),a=new Player(t);if(Straight.isValid(a))return e.handStraightFlush=t,!0}return!1}getHand(){let e=this.player.handStraightFlush,t=new Card(e[0]).value(),a=new Card(e[0]).type();return this.handName=`Quinte Flush : ${FRENCH_VALUES_NAME[t]} à ${FRENCH_TYPES_NAME[a]}`,e}getHandScore(){return 9}}class FourOfAKind extends Combo{constructor(e){super(),this.player=e}static isValid(e){return e.nbValueOcc.includes(4)}getHand(){let e=this.getCards(this.player.valueOcc,[4,1]),t=new Card(e[0]).value();return this.handName=`Carré : ${FRENCH_VALUES_NAME[t]}`,e}getHandScore(){return 8}}class Full extends Combo{constructor(e){super(),this.player=e}static isValid(e){return e.nbValueOcc.includes(3)&&e.nbValueOcc.includes(2)||2==e.allIndexOf(e.nbValueOcc,3).length}getHand(){let e=this.getCards(this.player.valueOcc,[3,2]),t=new Card(e[0]).value(),a=new Card(e[3]).value();return this.handName=`Full : ${FRENCH_VALUES_NAME[t]} par les ${FRENCH_VALUES_NAME[a]}`,e}getHandScore(){return 7}}class Flush extends Combo{constructor(e){super(),this.player=e}static isValid(e){return e.nbTypeOcc.includes(5)||e.nbTypeOcc.includes(6)||e.nbTypeOcc.includes(7)}getHand(){let e=this.getCards(this.player.typeOcc,[7,6,5]),t=new Card(e[0]).type();return this.handName=`Couleur : ${FRENCH_TYPES_NAME[t]}`,e}getHandScore(){return 6}}class Straight extends Combo{constructor(e){super(),this.player=e}static isValid(e){let t=(new Combo).orderCards(e.cards).map(e=>{return new Card(e).valueScore()});if((t=e.unique(t)).includes(14)&&t.push(1),t.length>4)for(let a=0;a<t.length-4;a++){let r=t.slice(a,a+5);if(r[4]==r[0]-4&&5*(r[0]+r[4])/2==r.reduce((e,t)=>e+t))return e.scoreStraight=r,!0}return!1}getHand(){let e=[];this.player.scoreStraight.forEach(t=>{let a=1==t?"A":VALUES[t-2],r=this.orderCards(this.player.cards).map(e=>new Card(e).value()==a?e:null).filter(Boolean);e.push(r[0])});let t=new Card(e[0]).value();return this.handName=`Suite : ${FRENCH_VALUES_NAME[t]}`,e}getHandScore(){return 5}}class ThreeOfAKind extends Combo{constructor(e){super(),this.player=e}static isValid(e){return e.nbValueOcc.includes(3)}getHand(){let e=this.getCards(this.player.valueOcc,[3,1]),t=new Card(e[0]).value();return this.handName=`Brelan : ${FRENCH_VALUES_NAME[t]}`,e}getHandScore(){return 4}}class DoublePair extends Combo{constructor(e){super(),this.player=e}static isValid(e){return e.allIndexOf(e.nbValueOcc,2).length>=2}getHand(){let e=this.getCards(this.player.valueOcc,[2,1]),t=new Card(e[0]).value(),a=new Card(e[2]).value();return this.handName=`Double Paire : ${FRENCH_VALUES_NAME[t]} et ${FRENCH_VALUES_NAME[a]}`,e}getHandScore(){return 3}}class Pair extends Combo{constructor(e){super(),this.player=e}static isValid(e){return e.nbValueOcc.includes(2)}getHand(){let e=this.getCards(this.player.valueOcc,[2,1]),t=new Card(e[0]).value();return this.handName=`Paire : ${FRENCH_VALUES_NAME[t]}`,e}getHandScore(){return 2}}class High extends Combo{constructor(e){super(),this.player=e}getHand(){let e=this.orderCards(this.player.cards).slice(0,5),t=new Card(e[0]).value();return this.handName=`Hauteur : ${FRENCH_VALUES_NAME[t]}`,e}getHandScore(){return 1}}const VALUES=["2","3","4","5","6","7","8","9","10","J","Q","K","A"],TYPES=["d","c","h","s"],VALUES_NAME={2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",J:"jack",Q:"queen",K:"king",A:"ace"},TYPES_NAME={d:"diamonds",c:"clubs",h:"hearts",s:"spades"},FRENCH_VALUES_NAME={2:"Deux",3:"Trois",4:"Quatre",5:"Cinq",6:"Six",7:"Sept",8:"Huit",9:"Neuf",10:"Dix",J:"Valet",Q:"Dame",K:"Roi",A:"As"},FRENCH_TYPES_NAME={d:"Carreaux",c:"Trèfle",h:"Coeur",s:"Pique"},COMBOS_LIST=[StraightFlush,FourOfAKind,Full,Flush,Straight,ThreeOfAKind,DoublePair,Pair,High],IMAGES_ID=[id_hero_card1,id_vilain_card1,id_hero_card2,id_vilain_card2,id_card1,id_card2,id_card3,id_card4,id_card5];function highlight(e){let t;t="id_text_hero"==e.id?heroHandIndexes:vilainHandIndexes,winnerHandIndexes.forEach(e=>{IMAGES_ID[e].classList.remove("highlight"),IMAGES_ID[e].classList.remove("floating")}),t.forEach(e=>{IMAGES_ID[e].classList.add("highlight"),IMAGES_ID[e].classList.add("floating")})}function unHighlight(e){let t;(t="id_text_hero"==e.id?heroHandIndexes:vilainHandIndexes).forEach(e=>{IMAGES_ID[e].classList.remove("highlight"),IMAGES_ID[e].classList.remove("floating")}),winnerHandIndexes.forEach(e=>{IMAGES_ID[e].classList.add("highlight"),IMAGES_ID[e].classList.add("floating")})}function flipCard(e,t){let a=e.width,r=1,n=48,s=0,i=!1;window.requestAnimationFrame(function l(){if(s>=a&&!i)r=-1,i=!0,e.src=t,window.requestAnimationFrame(l);else{if(s<=0&&i)return void(e.style.width="100%");s+=r*n,e.style.width=a-s+"px",e.style.height="100%",e.style.left=s/2+"px",window.requestAnimationFrame(l)}})}function indexMassage(e,t,a,r){e&&t?(id_text_hero.style.backgroundColor="#f0ad4e",id_text_vilain.style.backgroundColor="#f0ad4e"):e?(id_text_hero.style.backgroundColor="#2e4600",id_text_vilain.style.backgroundColor="#9f321e"):(id_text_hero.style.backgroundColor="#9f321e",id_text_vilain.style.backgroundColor="#2e4600"),id_text_hero_hand.innerText=a,id_text_vilain_hand.innerText=r,id_message.style.visibility="visible",id_text_hero.style.visibility="visible",id_text_vilain.style.visibility="visible",winnerHandIndexes.forEach(e=>{IMAGES_ID[e].classList.add("highlight"),IMAGES_ID[e].classList.add("floating")})}function playAgain(){for(let e=0;e<9;e++)IMAGES_ID[e].src="assets/images/cards/back.jpg";id_message.style.visibility="hidden",id_text_hero.style.visibility="hidden",id_text_vilain.style.visibility="hidden",id_play_btn.disabled=!1,winnerHandIndexes.forEach(e=>{IMAGES_ID[e].classList.remove("highlight"),IMAGES_ID[e].classList.remove("floating")})}class Deck{constructor(){this.deck=VALUES.map(e=>TYPES.map(t=>e+t)).flat()}cards(e,t){return this.deck.slice(e,t+1)}shuffle(){let e=[],t=0;for(;this.deck.length>0;)t=Math.floor(Math.random()*this.deck.length),e.push(this.deck[t]),this.deck.splice(t,1);this.deck=e}}class Card{constructor(e){this.label=e}value(){return this.label.slice(0,this.label.length-1)}type(){return this.label.charAt(this.label.length-1)}valueScore(){return VALUES.indexOf(this.value())+2}typeScore(){return TYPES.indexOf(this.type())+1}cardName(){let e=this.value(),t=this.type();return`assets/images/cards/${[VALUES_NAME[e],TYPES_NAME[t]].join("_of_")}.png`}}class Player{constructor(e){this.valueOcc={},this.typeOcc={},this.nbValueOcc={},this.nbTypeOcc={},this.scoreStraight=[],this.handStraightFlush=[],this.cards=e,this.valueOccurences(),this.typeOccurences()}valueOccurences(){this.cards.map(e=>new Card(e)).forEach(e=>{this.valueOcc[e.value()]?this.valueOcc[e.value()].push(e.label):this.valueOcc[e.value()]=[e.label]}),this.nbValueOcc=Object.values(this.valueOcc).map(e=>e.length)}typeOccurences(){this.cards.map(e=>new Card(e)).forEach(e=>{this.typeOcc[e.type()]?this.typeOcc[e.type()].push(e.label):this.typeOcc[e.type()]=[e.label]}),this.nbTypeOcc=Object.values(this.typeOcc).map(e=>e.length)}allIndexOf(e,t){if(e.indexOf(t)>=0){let a=[];for(let r=e.indexOf(t);r>=0;r=e.indexOf(t,r+1))a.push(r);return a}return[]}unique(e){let t=[];for(let a=0;a<e.length;a++)t.includes(e[a])||t.push(e[a]);return t}}var heroHandIndexes=[],vilainHandIndexes=[],winnerHandIndexes=[];function main(){id_chipSound.play(),id_play_btn.disabled=!0;let e=new Deck;e.shuffle();let t=e.cards(0,8),a=t.map(e=>{return new Card(e).cardName()});for(let e=0;e<a.length;e++)r=a[e],(new Image).src=r;var r;let n=t.slice(4,9),s=[t[0],t[2],n].flat(),i=[t[1],t[3],n].flat(),l=new Player(s),d=new Player(i),c=Combo.factory(l),o=Combo.factory(d),h=new Combo,u=c.getHand(),g=o.getHand(),_=h.compareCombos(c,o),p=_.getHand(),C=_.getHandScore(),S=c.getHandScore(),E=o.getHandScore(),f=h.areHandsEqual(p,u)&&S==C,y=h.areHandsEqual(p,g)&&E==C;heroHandIndexes=[],u.forEach(e=>{heroHandIndexes.push(t.indexOf(e))}),vilainHandIndexes=[],g.forEach(e=>{vilainHandIndexes.push(t.indexOf(e))}),winnerHandIndexes=[],p.forEach(e=>{winnerHandIndexes.push(t.indexOf(e))}),localStorage.isHeroWin=f,localStorage.isVilainWin=y;let H=setInterval(function(){9==v?(indexMassage(f,y,c.getHandName(),o.getHandName()),clearInterval(H)):(flipCard(IMAGES_ID[v],a[v]),v++)},200),v=0;console.log("allCards = ",t),console.log("Pour le hero :"),console.log("heroHand = ",u),console.log("Pour le vilain :"),console.log("vilainHand = ",g),console.log("Winner :"),console.log("winnerHand = ",p),console.log("==================")}