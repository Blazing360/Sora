/**
 * Trainer Cards
 *
 * This is where the trainer cards commands
 * are located.
 * Please order the cards in alphabetical order in the correct segment 
 */
 
 function lastSeen (user) {
 	user = toId(user);
 	var result;
 	if (Users.get(user)) {
 		if (Users.get(user).connected) return '';
 		return '<b>Last Seen: </b>' + Core.profile.lastSeen(false, Users.get(user)).split('&nbsp;')[2];
 	}
	return '<b>Last Seen: </b>' + Core.profile.lastSeen(false, user).split('&nbsp;')[2];
 }
 
var trainerCards = {
/**
 * ~ Rank aka people who had infite bucks to buy admin
 * 
 */
	bart: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<a><font size= 4><center><b><font color = 07e1ed>∆Champion Bart∆</font></b></center></a><br />'+
		     '<center><i>"My pawn. My bishop. My rook. My knight. And worst of all, I\'ve lost my queen. But I’m still not in checkmate. Not yet anyway."</i></center> <br />'+
		     '<b>Ace:</b> Weavile<br />'+
	 	     '<b>Battle Rules:</b> <br/>'+
	 	     '-Ubers Battle <br/>'+
	 	     '-At least 2 must be tiered lower than OU <br/>'+
	 	     '-No Lowering opponents stats (Unless caused by attack) <br/>'+
	 	     '-No Pokemon with a base stat over 130<br />'+
	 	     '<center><img src="http://sprites.pokecheck.org/i/461.gif"> <img src="http://i1280.photobucket.com/albums/a482/Skarmory11/Misc%20sprites/Bart_zps03ad3a7d.png"><img src="http://play.pokemonshowdown.com/sprites/xyani/torterra.gif"></center>'+
	 	     '<center><img src="http://oi62.tinypic.com/14cfyh0.jpg"></center> <br />');
        },
        
        noah: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<a><font size= 4><center><b><font color = 430747>∆Champion Noah∆</font></b></center></a><br />'+
		      '<center><i>"Need a Champion? I Noah guy."</i></center> <br />'+
		      '<b>Ace:</b> Demonisation (Yveltal) <br />'+
	 	      '<b>Battle Rules:</b> <br/>'+
	 	      '-Ubers <br/>'+
	 	      '<center><img src="http://i.imgur.com/pFtOL9I.png"> <img src="http://play.pokemonshowdown.com/sprites/xyani/yveltal.gif"></center> <br />'+
	 	      '<img src="http://sprites.pokecheck.org/i/134.gif"> <br />'+
	 	      'R.I.P. in piece Liquidbones 2013-2014 <br />'+
	 	      'Gone, but definitely not forgotten. <br />'+
	 	      '<center><img src="http://oi62.tinypic.com/14cfyh0.jpg"></center> <br />');
	},
	
	onyx: 'onyxeagle',
	onyxeagle: function(target, room, user) {
	 	if (!this.canBroadcast()) return;
	 	this.sendReplyBox('<a><font face = forte><font color =  b27300><font size= 5><center>∆OnyxEagle∆</center></font></a><br />'+
	 	    '<center><i>"Heads or Tails? Heads, I Win; Tails, you Lose"</i></center> <br />'+
		    '<b>Skilled in:</b> Rock types/ Ubers, Random Battle and OU to a certain degree.<br />'+
		    '<b>History:</b> 2nd Champion of New Sora. One of the 2 people who resurrected Sora from the rubbles. <br/>'+
		    '<b>Notes:</b> Resident coder of Sora, still conducts tests and registrations, offers advice. <br/>'+
	 	    '<img src="http://play.pokemonshowdown.com/sprites/xyani/kabutops.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/landorus.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/heracross-mega.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/tyranitar.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/tyrantrum.gif">'+
	 	    '<center><img src="http://oi62.tinypic.com/14cfyh0.jpg"></center> <br />');
        },
        
        risu: 'ninjarisu',
	ninjarisu: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<a><font size= 4><center><b>∆Frontierhead Ninjarisu∆</b></center></a><br />'+
		    '<i>"I will show you the power of the best of the worst"</i> <br />'+
		    '<b>Ace:</b> Pachirisu<br />'+
	 	    '<b>Symbol:</b> Puny Symbol<br />'+
	 	    '<b>Rules:</b> <a href="http://www.smogon.com/forums/threads/oras-fu-winner-of-omotm-machoke-sticky-web-banned.3519286/">FU</a> <br />'+
	 	    '<img src="http://play.pokemonshowdown.com/sprites/xyani/pachirisu.gif"><img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/unown-romeo.gif"><img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/unown-india.gif"><img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/unown-sierra.gif"><img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/unown-uniform.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/pachirisu.gif">'+
	 	    '<center><img src="http://oi62.tinypic.com/14cfyh0.jpg"></center> <br />');
	 	    
	},
/**
 * Elite Four
 * 
 */        
        elitefour: 'e4',
		elitefour: function(target, room, user) {
				if (!this.canBroadcast()) return;
				this.sendReplyBox('Here is a list of Sora League Elite Four:<br />' +
					'- <a href="http://soraleague.weebly.com/elite-four.html">Sora League Elite Four</a><br />' +
					'</div>');
	},
	
        abadon: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('E4 <b>Abadon</b><br />'+
		      '<i>"SWIGGITY SWOOTY, I\'M COMING FOR THAT BOOTY"</i> <br />'+
		      '<b>Type: <font color = 066baa>Ghost</font></b> <br />'+
		      '<b>Ace:</b> Gengar<br />'+
	 	      '<b>Battle Rules:</b> <br/>'+
	 	      '-None <br />'+
	 	      '<center><img src="http://oi62.tinypic.com/14cfyh0.jpg"></center> <br />');
	 	
        },
        
        bush: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('E4 <b>Bush</b><br />'+
		      '<i>"Storms make the oak grow deeper roots."</i> <br />'+
		      '<b>Type: <font color =006b0a>Grass</font></b><br />'+
		      '<b>Ace:</b> Ludicolo <br />'+
	 	      '<b>Battle Rules:</b> <br/>'+
	 	      '-None <br/>');
	 	      
        },
        
        edge: function(target, room, user) {
		if (!this.canBroadcast()) return;
	        this.sendReplyBox('E4 <b>Edge</b><br />'+
			  '<i>"How can you face your problem when your problem is your face?"</i> <br />'+
			  '<b>Type: <font color = 7ab6ff>Flying</font></b><br />'+
			  '<b>Ace:</b> Mega Charizard-X<br />'+
			  '<b>Battle Rules:</b><br />'+
			  '-No Hazards<br />');
       
        },
        
        zoro: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('E4 <b>Zoro</b><br />'+
		      '<i>"I am everywhere you are not."</i> <br />'+
		      '<b>Type:<font color = ff007f> Psychic</font></b><br />'+
		      '<b>Ace:</b> Gallade <br />'+
	 	      '<b>Battle Rules:</b> <br/>'+
	 	      '-None <br/>'+
	              '<img src="http://sprites.pokecheck.org/i/645.gif"><img src="http://sprites.pokecheck.org/t/187.gif">');
	 	      
	},
	
	sube4: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center>Sub E4 Position: <b><font color = FF0000>Offline</font></b></center><br />'+
		'Sub E4 <b>???</b> <br />'+
		'<b>Type:</b> <b><font color = 006b0a>???</font></b><br />'+
		'<b>Battle Rules:</b> <br />'+
		'-??? <br />'+
		'-??? <br />');
        
        },
/**
 * Battle Frontier
 * 
 */
        frontier: 'battlefrontier',
	battlefrontier: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<b>Sora Battle Frontier</b><br />'+
		    '<i>"Welcome to the Sora Battle Frontier! Challenge us if you Dare."</i> <br />'+
		    '<b>Requirements:</b> 8 Badges<br />'+
	 	    '<b>Rules:</b> The Battle Frontier must be challenged after collecting 8 gym badges and 2 normal Frontiers must be defeated to gain access to the Elite 4.<br />'+
                    '- The Elite Frontiers can only be challenged once a challenger has 4 different symbols.<br />'+
                    '- The Frontier Head can be challenged after deafeating all other Frontier members.<br />'+
                    '- If a challenger loses to an Elite Frontier or the Frontier Head, they will randomly lose one Elite symbol and one normal symbol.<br />'+
                    '<blink><b>Notes:</b></blink><br />'+
                    '- The same frontier may be challenged once every 24 hours.<br />'+
                    '- You cannot use a super-effective team when challenging a Monotype Tier Frontier<br />'+
                    '- <a href="http://soraleague.weebly.com/rules.html">Challenging Rules</a><br />'+
                    '- <a href="http://soraleague.weebly.com/frontier.html">Battle Frontier Members</a><br />');
        },
	
        arjunb: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Frontier <b>Arjunb</b><br />'+
			 '<i>"???"</i> <br />'+
		         '<b>Symbol:</b>??? <br />'+
			 '<b>Ace:</b> ????<br />'+
			 '<b>Battle rules:</b> <br />'+
			 '-??? <br />');
        },
        
        asch: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Frontier <b>Asch</b><br />'+
			  '<i>"Chief Akkie, head of the meme police, serving for 38 years; no meme slips through her cracks."</i> <br />'+
			  '<b>Symbol:</b> White Knight Symbol<br />'+
			  '<b>Ace:</b> Crawdaunt <br />'+
			  '<b>Battle Rules:</b> <br/>'+
		 	  '-Only BL, BL2, BL3 and BL4 Pokemon may be used.<br/>'+
		 	  '-No Mega Evolution<br />'+
		 	  '<img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/bulbasaur-3.gif"><img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/bulbasaur-3.gif">');
	},
	
        blade: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<a><font size= 4><center><img src="http://sprites.pokecheck.org/i/494.gif"><b><font color = FF0000>∆EliteFröntier∆Blade☯</font></b><img src="http://sprites.pokecheck.org/i/080.gif"></center></a><br />'+
			'<center><i>"I\'m a double edged sword, so which blade is sharper?"</i></center> <br />'+
			'<b>Symbol:</b> Yin and Yang <br />'+
			'<b>Ace:</b> Mybro (Slowbro) <br />'+
			'<b>Battle Rules:</b> <br />'+
			'-Ability Shift Tier<br />'+
			'-No Johns<br />'+
		        '<a href="http://www.smogon.com/forums/threads/ability-shift.3503100/">How Ability Shift works</a> <br />'+
                        '<a href="http://www.psypokes.com/lab/abilities.php">Pokemon Ability List</a> <br />'+
                        '<details><summary><b>Champion\'s Challenge Rules:</b></summary> <br />'+
                        '-NU Monotype<br />'+
                        '-R U Too Strong?</details><br />'+
                        '<details><summary><b>Badges: (Click here to open)</b></summary><br />'+
                        '<a href="http://oi57.tinypic.com/2ldx1lu.jpg"><img src="http://oi58.tinypic.com/2i6cilg.jpg" title="Smeargle the Creator: Creator of the Badge System"></a></details> <br />'+
			'<details><summary><font color = 009900><center><b>Torkoal Shrine</b></center></font></summary><center><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/torkoal.gif"></center>'+
                        '<center><b>R.I.P. War Turtle</b></center> <br />'+
                        '<center>1st Apostle of the All Mighty Lord Parasect</center></details><br />'+
                         '<center><img src="http://oi62.tinypic.com/14cfyh0.jpg"></center> <br />');
	},
	
	srewop: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Elite Frontier <b>Srewop</b><br />'+
			  '<i>"You came to the wong place if you wanted a win."</i> <br />'+
			  '<b>Symbol:</b> SumTingWong<br />'+
			  '<b>Ace:</b> Golbat <br />'+
			  '<b>Battle Rules:</b> <br/>'+
		 	  '-RU Monotype <br/>'+
		 	  '-No Stealth Rock <br/>'+
		 	  '-No Knock off<br />'+
		 	  '<center><img src="http://play.pokemonshowdown.com/sprites/xyani/zubat.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/golbat.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/zubat.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/gengar.gif"></center> <br />');
	},
	
	tempest: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Frontier <b>Tempest</b><br />'+
			 '<i>"D=<{[(2*lv+10)/250]*Atk/Def*BP+2}*STAB*Eff*Crit*Itm*Abl*Wt*Spr>*x"</i> <br />'+
		         '<b>Symbol:</b> World <br />'+
			 '<b>Ace:</b> Pikachu<br />'+
			 '<b>Battle rules:</b> <br />'+
			 '-Cosplay VGC \'15 <br />'+
			 '-Teams must have the same species and forms as a fictional character in the Pokemon games, anime, or manga e.g. a team based on Red\'s with Pikachu, Lapras, Snorlax, Venusaur, Charizard, and Blastoise <br />'+
			 '-EV spreads, movesets, gender, and items (including Mega Stones) can be changed <br />'+
			 '-Ash teams are not allowed <br />'+
			 '<details><summary><b>Badges: (Click here to open)</b></summary><br />');

        },
        
        zachary: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Frontier <b>Zachary</b><br/>' +
			'<i>"Can you do a few things at the same time?"</i><br/>' +
			'<b>Symbol:</b> Multitasking<br/>' +
			'<b>Ace:</b> All<br/>' +
			'<b>Battle Rules:</b><br/>' +
			'-Smogon Doubles'+
			'<details><summary><b>Champion\'s Challenge Rules:</b></summary> <br />'+
			'-Pikachu Tournamentchu <br />'+
			'-No CAP Pokemon</details> <br />');
			
	},
	
        subfrontier: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center>Sub Frontier Position: <b><font color = FF0000>Offline</font></b></center><br />'+
		'Sub Frontier <b>???</b> <br />'+
		'<b>Symbol:</b> ???<br />'+
		'<b>Battle Rules:</b> <br />');
        
        },
 /**
 * Gym Leaders
 * 
 */
        
        leaders: 'gym leaders',
	gymleaders: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Here is a list of Sora League Gym Leaders:<br />' +
				'- <a href="http://soraleague.weebly.com/gym-leaders.html">Sora League Gym Leaders</a><br />' +
				'</div>');
	},
	
        bug: 'glh',
	glh: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>H</b><br />'+
			  '<i>"H4Hentai, H4Harem, H4Harassment, H4Hugs. Done checking out those sexy curves? Now it\'s time to check out my bugs. :3"</i> <br />'+
			  '<b>Type: <font color = 65b510>Bug</font></b><br />'+
			  '<b>Ace:</b> None <br />' + lastSeen('gymldrh') + '<br />');
        },
        
        dark: 'darkus',
        darkus: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Darkus</b><br />'+
			  '<i>"But I don\'t like Bakugan."</i> <br />'+
			  '<b>Type: <font color = 15012b>Dark</font></b><br />'+
			  '<b>Ace:</b> Bisharp<br />' + lastSeen('gymldrdarks') + '<br />'+
			  '<img src="http://play.pokemonshowdown.com/sprites/xyani/victini.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/bisharp.gif"><br />');
        },
        
        dragon: 'matt99',
	matt99: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Matt99</b><br />'+
		      'Leader Ranking: <font color = 5dff00><b>4th</font></b> <br />'+
		      '<i>"Feel the Wrath of my Dragons"</i> <br />'+
		      '<b>Type: <font color = 230077>Dragon</font> </b><br />'+
		      '<b>Ace:</b> Goodra<br />' + lastSeen('gymldrmatt99') + '<br />');
	},
	
	electric: 'situm',
	situm: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Situm</b><br />'+
			 '<i>"Electricity is the best power of the world...And that power is in my pokemons!"</i> <br />'+
		         '<b>Type: <font color = d6cc0c>Electric</font></b><br />'+
			 '<b>Ace:</b> Mega Manectric<br />' + lastSeen('gymldrsitum') + '<br />');
        },
        
        fairy: 'meows',
        meows: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Meows</b><br />'+
		      'Leader Ranking: <font color =FF0000><b>1st</font></b> <br />'+
	              '<i>"Too pwetty for you"</i> <br />'+
	              '<b>Type: <font color = ff42a0>Fairy</font></b><br />'+
	              '<b>Ace:</b> Waifu (Gardevoir)<br />');
        },
        
        fighting: 'corea',
        corea: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Corea</b><br />'+
		        'Leader Ranking: <font color =ff9900><b>2nd</font></b> <br />'+
			'<i>"Dicking on Mac is essential."</i> <br />'+
			'<b>Type: <font color = d83c08>Fighting</font></b><br />'+
			'<b>Ace:</b> Chesnaught <br />' + lastSeen('gymldrcorea') + '<br />');
        },
        
        fire: 'leaf',
        leaf: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Leaf</b><br />'+
		       'Leader Ranking: <font color = d8ff00><b>3rd</font></b> <br />'+
	              '<i>"Flamethrower can\'t melt steel types"</i> <br />'+
	              '<b>Type: <font color = FF0000>Fire</font></b><br />'+
	              '<b>Ace:</b> Entei<br />'  + lastSeen('gymldreaf') + '<br />');
	},
	
	flying: 'indeter',
	indeter: function (target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Indeter</b><br />'+
			  '<i>"And - I\'m off."</i> <br />'+
			  '<b>Type: <font color = 7ab6ff>Flying</font></b><br />'+
			  '<b>Ace:</b> Gliscor<br />' + lastSeen('gymldrindeter') + '<br />');
	},
	
	ghost: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />'+
			 '<i>"???"</i> <br />'+
		         '<b>Type: <font color = 7814e2>Ghost</font></b><br />'+
			 '<b>Ace:</b> ???<br />');
        },
        
        grass: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />'+
			'<i>"???"</i> <br />'+
			'<b>Type: <font color = 006b0a>Grass</font></b> <br />'+ 
			'<b>Ace:</b> ???<br />' + lastSeen('') + '<br />' );
	},
	
	ground: 'noahb',
	noahb: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>NoahB</b><br />'+
			  '<i>"Be sure you be at sky or else you have lost"</i> <br />'+
			  '<b>Type: <font color = 5b3a00>Ground</font></b><br />'+
			  '<b>Ace:</b> Mamoswine<br />' + lastSeen('gymldrnoahb') + '<br />');
	},
	
	ice: 'mark',
        mark: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Mark</b><br />'+
			  '<i>"Hard work pays off in the end."</i> <br />'+
			  '<b>Type: <font color = 00e0ac>Ice</font></b><br />'+
			  '<b>Ace:</b> Don\'t Do Drugs (Mega Glalie)<br />' + lastSeen('gymldrmark'));
	},
	
	normal: 'vanilla',
        vanilla: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Vanilla</b><br />'+
		         'Leader Ranking: <font color = 00ce7f><b>6th</font></b> <br />'+
		         '<i>"Prepare to be pummeled cheerfully, jauntily, and utterly one-sidedly!"</i> <br />'+
	              	 '<b>Type: <font color = ffa5d5>Normal</font></b><br />'+
			 '<b>Ace:</b> Dragonslayer (Miltank)<br />' + lastSeen('gymldrvanilla') + '<br />');
        },
        
	poison: 'poppy',
        poppy: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Poppy</b><br />'+
		         'Leader Ranking: <font color = 00ce0d><b>5th</font></b> <br />'+
			 '<i>"It\'s you and me against the world, you\'ll see!" - Xeniathan! Destroyer of Worlds</i><br />'+
			 '<b>Type: <font color = aa00ff>Poison</font></b><br />'+
			 '<b>Ace:</b> Box Ghost (Gengar)<br />' + lastSeen('gymldrpoppy') + '<br />');
	},
        
	psychic: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />'+
			  '<i>"???"</i> <br />'+
			  '<b>Type: <font color = ff00b6>Psychic</font></b><br />'+
			  '<b>Ace:</b> ??? <br />' + lastSeen('') + '<br />');
	},
        
        rock: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />'+
			  '<i>"???"</i> <br />'+
			  '<b>Type: <font color = 472e10>Rock</font></b><br />'+
			  '<b>Ace:</b> ???<br />');
        },
        
        steel: 'floatzel',
        floatzel: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Floatzel</b><br />'+
			  '<i>"I\'ve been at this 3 times"</i> <br />'+
			  '<b>Type: <font color = 5e6664>Steel</font></b> <br />'+
			  '<b>Ace:</b> Jirachi <br />' + lastSeen('gymldrfloatzel') + '<br />' +
			  '<img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/beldum.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani-back/klink.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/steelix-mega.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani-back/klink.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/beldum.gif">');
			  
	},
	
        water: 'saken',
	saken: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Saken</b> <br />'+
		         '<i>"People lie, numbers don\'t."</i> <br />'+
		         '<b>Type: <font color = 0745ff>Water</font></b><br />'+
			 '<b>Ace:</b> Gyarados<br />'+
			 '<b<Last Seen:</b> ' +lastSeen('gymldrsaken') + '<br />');
	},
 /**
 * Other Trainer Cards
 * 
 */
	ascher: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox( '<center><b><font size="4" color="2558db">Ascher</font></b></center><br />'+
                '<center><i>"*SEAL NOISES*"</i> </center><br /><br />'+
                '<b>Aces: </b>Venusaur and Whimsicott<br />'+
                '<b>Favorite Pokémon: </b>Shroomish, Venusaur, Whimsicott, Lotad, And Ludicolo<br />'+
                '<b>Achievements: </b>Getting in the top 80s of the main OU Monotype Ladder, Winning the E4 Promo tours 4 times<br />'+
                '<center><img src="http://play.pokemonshowdown.com/sprites/xyani/shroomish.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/venusaur.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/shroomish.gif"></center> <br />');
                
	},
	
	meowsie: function (target, room, user) {
		if (!this.canBroadcast()) return;
                this.sendReplyBox('<center><b><font size = 3 color = 10929E>MeowsOfSora</font></b><br/>' +
                        '<font size = 1><i>"I might be a bitch, but I\'m definitely not a pussy."</i></font></center><br/>' +
                        '<b>Type Speciality: <font color = "green">Bug</b></font><br/>' +
                        '<b>Ace:</b> Wobbuffet<br/>' +
                        '<b>Tiers Played:</b> OU, Monotype, Tier Shift<br/>' +
                        '<center><img src = "http://i196.photobucket.com/albums/aa279/loganknightphotos/wobbuffet-2.gif"><img src = "http://sprites.pokecheck.org/t/140.gif"><img src = "http://i196.photobucket.com/albums/aa279/loganknightphotos/wobbuffet-2.gif"> <br />');
        },
        
        arjun: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><input type="image" src="http://i.imgur.com/bnCFCm5.png"><div align="center"><br />'+
		'<div align="center">"<i>Fall seven times, stand up eight. That\'s what I do</i>"</div><br />'+
		'<b>Favorite Types:</b> Fighting, Dark and Poison(with crobat)<br />'+
		'<b>Note:</b> He is probably the craziest member of the league.<br />'+
		'<b> Achievements:</b> Former Elite, got the elite position in his first promo tournaments.<br />'+
		'<b>Favorite Pokemon:</b><br />'+
		'<img src="http://play.pokemonshowdown.com/sprites/xyani/terrakion.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/weavile.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/medicham-mega.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/crobat.gif"><div align="center"><br />'+
	        'Remember, victory or defeat always depends on how you play. But,  It doesnt if you\'re up against me. <br />');
        },
        
	ignatius: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<b><font color = 55dbe8><a><font size= 4><center>∆Gym Ldr Meows∆</font></center></b><br />'+
		'<center><i>"I might be a bitch, but I\'m definitely not a pussy"</i></center><br />'+
		'<b>Who am I:</b> Middle Cup Master, Ice Trainer and OM lover <br />'+
		'<b>Favorite Pokemon:</b> Gardevoir, Porygon 2, Meloetta <br />'+
		'<b>Favorite type:</b> Ice <br />'+
		'<b>Ace:</b> Gurdurr <br />'+
		'<center><img src="http://play.pokemonshowdown.com/sprites/xyani/gurdurr.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/doublade.gif"></center><br />');
	},
        
        abtth: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox( '<center><b><font size="4" color="03b206">ABootToTheHead</font></b></center><br>'+
		'<center><i>"Stardust-weaved ARiA, please deliver this melody for me."</i> </center><br /><br />'+
		'<b>Ace: </b>Scizor and Whimsicott<br />'+
		'<b>Favorite Pokemon: </b>Typhlosion and Scizor<br />'+
		'<b>Preferred tiers: </b>VGC, Ubers, OU <br />'+
		'<b>Known for: </b>VoltTurn and Whimsistall shenanigans<br />'+
		'<b>Achievements: </b>Ex-Elite Frontier, ex-Elite Four<br /><br />'+
		'<center><img src="http://sprites.pokecheck.org/i/157.gif"><img src="http://sprites.pokecheck.org/i/530.gif"><img src="http://sprites.pokecheck.org/i/547.gif"><img src="http://sprites.pokecheck.org/t/144.gif"><img src="http://sprites.pokecheck.org/i/205.gif"><img src="http://sprites.pokecheck.org/i/310.gif"><img src="http://sprites.pokecheck.org/i/212.gif"></center> <br />'+
		'<a href="http://soraleague.weebly.com/badges.html#flannery"><img src="http://i.imgur.com/0ScjBhf.png" title="10 Badge Defends"></a><a href="http://soraleague.weebly.com/badges.html#bertha"><img src="http://i.imgur.com/MDcdCka.png" title="5 E4 Defends"></a><a href="http://soraleague.weebly.com/badges.html#starly"><img src="http://i.imgur.com/zaLhq1k.png" title="1 Year on Sora"></a><a href="http://soraleague.weebly.com/badges.html#ldr"><img src="http://i.imgur.com/ELFPzW8.png" title="Achieved Gym Leader Status"></a><a href="http://soraleague.weebly.com/badges.html#frontier"><img src="http://i.imgur.com/7jbhEJC.png" title="Achieved Frontier Status"></a><a href="http://soraleague.weebly.com/badges.html#efrontier"><img src="http://i.imgur.com/2iZp7Mi.png" title="Achieved EFrontier Status"></a><a href="http://soraleague.weebly.com/badges.html#e4"><img src="http://i.imgur.com/QtECCD9.png" title="Acieved Elite 4 Status"></a></details> <br />');
        },
        
        terror: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox( '<center><b><font size="4" color="82127a">Terror</font></b></center><br>'+
		'<center><i>"Laughing at Dinite\'s videos"</i> </center><br /><br />'+
		'<b>Ace: </b>Mega Sharpedo/Garchomp<br />'+
		'<b>Skilled at: </b>Being incredibly annoying, Balanced Hackmons, Certain Monotypes.<br />'+
		'<b>Achievements: </b> Best electric leader sora ever had, ex sora ground leader, and the best frontier of another league. Top 10 on the Balanced Hackmons Ladder.<br />'+
		'<img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/greninja.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/ferrothorn.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/sharpedo.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/garchomp.gif">');
        },
        
        azh: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<a><font size= 4><center><b>∆ArthurZH∆</b></center></a><br />'+
			 '<center><i>"The power of the seas, storms and rivers are mine to hold....and here you dare to stand before me?"</i></center> <br />'+
			 '<b>Favoured Type:</b> Water<br />'+
			 '<b>Favoured Metagame:</b> Smogon Doubles <br />'+
			 '<b>Ace:</b> Mega Swampert/Mega-Gyarados for monotype<br />'+
			 '<b>Achievements:</b> Ex Water Leader of Sora, Ex Roulette/Champion\'s Challenge/Monotype/Smogon Doubles Frontier of Sora<br />'+
			 '<center><img src="http://fc00.deviantart.net/fs71/f/2014/082/f/8/manaphy_gif_by_gloomymyth-d7bakkc.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/keldeo-resolute.gif"><img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/tentacruel.gif"><img src="http://www.pokemonreborn.com/custom/44203.png?530"> <img src="http://play.pokemonshowdown.com/sprites/xyani/kabutops.gif"><img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/swampert.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/gyarados.gif"></center>');
	},

        jaddu: function (target, room, user) {
                if (!this.canBroadcast()) return;
                this.sendReplyBox('<center><img src="http://i.imgur.com/GHnqgjH.png"></center><br />'+
                '<i><font color="blue"><b>Quote:Who am I? Well,I am your Worst Nightmare<br>'+
                'Ace=Infernape(CR Ace:Rhydon)<br />'+
                'Custom Rules:<br />'+
                '- No poke above the base speed of 40<br />'+
                '- No Hazards<br />'+
                '-Speed should not be increased or decreased<br />'+
                '</b></i><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/infernape.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/rhydon.gif">');
        },

        
		


	jeratt: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<a><font size= 4><center><b>∆Artiste Jeratt∆</b></center></a><br />'+
			'<center><i>"No one out-predicts me, but me."</i></center><br />'+
			'<img src="http://sprites.pokecheck.org/i/235.gif"> <img src="http://sprites.pokecheck.org/t/033.gif"><br />'+
			'<b>Highly skilled in:</b> Dragon & Ice<br />'+
			'<b>Skilled in:</b> Making quotes, backgrounds for Sora and many Pokemon types.<br />'+ 
		 	'<b>Note:</b> Close the Lobby and see what I can really do. <br/>'+
		 	'<b>History:</b> Greatest Ice E4, <strike>undefeated</strike> Dragon E4. <br/>'+
		 	'P.S. I\'m still Dragon you away with my coldness. <br/>'+
		 	'P.P.S Use Scizor against me, and I\'ll get fired up and blast you! <br/>'+
		 	'<center><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/rattata.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/mamoswine.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/vanilluxe.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/dialga.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/zoroark.gif"></center>'+
		 	'<details><summary><b>Badges:</b></summary><br />'+
		 	'<a href="http://oi57.tinypic.com/2ldx1lu.jpg"><img src="http://oi58.tinypic.com/2i6cilg.jpg" title="Smeargle the Creator: Resident Artist of Sora, Metagame Creator: CC, Priomons, Incl Weather, PokeSandbox"></a></details><br />'+
		 	'<center><img src="http://oi62.tinypic.com/14cfyh0.jpg"></center> <br />');
        },
        
        gasp: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Trainer <b>gasp</b><br />'+
			'<i>"Lights out."</i> <br />'+
			'<b>Ace:</b> Mega Gengar<br />'+
			'<b>Honours:</b> Sora\'s first challenger to reach Hall of Fame.<br />'+
			'<b>Prefered Tier:</b> Balanced Hackmons'+
		 	'<img src="http://pldh.net/media/pokemon/gen5/blackwhite_animated_front/302.gif"> <img src="http://media.tumblr.com/tumblr_m6ci5tQsEv1qf6fp2.gif"><br />'+
		 	'<b>Badges:</b><br />'+
		 	'<a href="http://oi60.tinypic.com/2itps9k.jpg"><img src="http://oi62.tinypic.com/xgmjhc.jpg" title="Golduck the Meta Breaker: Defeated the League"></a><br />');
        
        
        },
       
/**
 * Other Meta Games
 * 
 */        
        ourevamped: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Welcome to OU Revamped! Displayed here are the details on how OU Revamped works! <br />'+
			'After seeing the direction that the Smogon OU meta was taking, we decided we\'d like to have a different way to play Smogon\'s OU. <br />'+
			'Unbanned Pokemon from Uber are as follows: <br />'+
			'Mega-Mawile <img src="http://play.pokemonshowdown.com/sprites/xyani/mawile-mega.gif"> <br />'+
			'Aegislash <img src="http://play.pokemonshowdown.com/sprites/xyani/aegislash.gif"> <br />'+
			'Deoxys-Defense <img src="http://play.pokemonshowdown.com/sprites/xyani/deoxys-defense.gif"> <br />'+
			'Deoxys-Speed <img src="http://play.pokemonshowdown.com/sprites/xyani/deoxys-speed.gif"> <br />'+
			'</div>');
			
        },
        
        incweather: 'incweather',
		incweather: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Here is a detailed explanation of the format Inclement Weather:<br />' +
				'- <a href="http://soraleague.weebly.com/inclement-weather.html">Inclement Weather</a><br />' +
				'</div>');
	},
	
        nervepulse: 'priomonsnervepulse',
        priomonsnervepulse: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox( '<img src="http://oi58.tinypic.com/ayw0aq.jpg"> <br />');
		
        },
        
        tremorshock: 'priomonstremorshock',
        priomonstremorshock: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox( '<img src="http://oi58.tinypic.com/14u8e2s.jpg"> <br />');
		
        },
        
        fairywind: 'priomonsfairywind',
        priomonsfairywind: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox( '<img src="http://oi60.tinypic.com/33z7ndf.jpg"> <br />');
		
        },
        
        twineedle: 'priomonstwineedle',
        priomonstwineedle: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox( '<img src="http://oi58.tinypic.com/9h6i5z.jpg"> <br />');
		
        },
        
        dracocrash: 'priomonsdracocrash',
        priomonsdracocrash: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox( '<img src="http://oi59.tinypic.com/dyvvw2.jpg"> <br />');
		
        },
        
        flameshot: 'priomonsflameshot',
        priomonsflameshot: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox( '<img src="http://oi62.tinypic.com/29m6j5e.jpg"> <br />');
		
        },
        
        venomstrike: 'priomonsvenomstrike',
        priomonsvenomstrike: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox( '<img src="http://oi60.tinypic.com/2wf761w.jpg"> <br />');
		
        },
        
        divingcharge: 'priomonsdivingcharge',
        priomonsdivingcharge: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox( '<img src="http://oi58.tinypic.com/ezj4pl.jpg"> <br />');
		
        },
        
        stonespine: 'priomonsstonespine',
        priomonsstonespine: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox( '<img src="http://oi62.tinypic.com/2moy06e.jpg"> <br />');
		
        },
        
        sapblast: 'priomonssapblast',
        priomonssapblast: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox( '<img src="http://oi62.tinypic.com/23rk9oz.jpg"> <br />');
		
        },
        
        kineticforce: 'priomonskineticforce',
        priomonskineticforce: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox( '<img src="http://oi60.tinypic.com/1ptn36.jpg"> <br />');
		
        },
/**
 * Informative Cards
 * 
 */
        getbucks: 'getbucks',
		getbucks: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Please check out the Shop page in the link below to see methods of earning money:<br />' +
				'- <a href="http://soraleague.weebly.com/shop.html">Shop</a><br />' +
				'</div>');
	},

	site: 'site',
		site: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Here is The Sora League Website:<br />' +
				'- <a href="http://soraleague.weebly.com/index.html">Sora League Site</a><br />' +
				'</div>');
	},
	
	ipl: 'ipl',
		ipl: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Here is a link to the International Pokemon League Tournament (IPL):<br />' +
				'- <a href="http://sorapremierleague.weebly.com/">IPL Tournament Web Site</a><br />' +
				'</div>');
	},

	events: 'events',
		events: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Here is a list of events held in The Sora League:<br />' +
				'- <a href="http://soraleague.weebly.com/events.html">Sora League Events</a><br />' +
				'</div>');
	}, 

	leaderranks: 'ranks',
		ranks: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Listed here are the Top 6 Leaders in The Sora League based on performance in our Monthly Promotional Tournament! Please keep in mind, the number of ranked Leaders may change month to month and the ranking methodology may be changed in the future.<br />'+
				'-<b>1st <font color= 65b510>Meows</font></b> (Bug)<br />'+
				'-<b>2nd <font color= d83c08>Corea</font></b></b> (Fighting)<br />'+
				'-<b>3rd <font color= FF0000>Leaf</font></b> (Fire)<br />'+
				'-<b>4th <font color= 230077>Matt99</font></b> (Dragon)<br />'+
				'-<b>5th <font color= aa00ff>Poppy</font></b> (Poison)<br />'+
				'-<b>6th <font color= ffa5d5>Vanilla</font></b> (Normal)<br />'+
				'</div>');
	
	},
	
	badges: 'badge',
	        badge: function(target, room, user) {
	        	if (!this.canBroadcast()) return;
	        	this.sendReplyBox('<a><font size= 4><marquee><b>Badges</b></marquee></font></a><br />'+
	        	        '<b>What are Badges:</b><br />'+
	        	        'Badges are prestigious achievements awarded on the user\'s trainer card and usually come with varying bucks award.<br />'+
	        	        'They are awarded for league activity and vary in difficulty.<br />'+
	        	        'A full list of badges can be found <a href="http://soraleague.weebly.com/badges">HERE</a> <br />'+
	        	        '<br />'+
	        	        '<details><summary><center><b>Test your skills here</b></center></summary><center><a href="http://soraleague.weebly.com/badges.html#parasect"><img src="http://oi61.tinypic.com/2nkoyyu.jpg" title="Parasect the God Above All"></a><br /></center></details>'+
	        	        '<br />'+
	        	        '<blink><font color=#FF0000><b>Notes:</b></font></blink><br />'+
	        	        '- You MUST have a trainer card<br />'+
	        	        '<font color=#006600>- <b>Hover over a badge for details<br />'+
	        	        '- Click on a badge for an enlarged image and further information</b></font><br />'+
	        	        '- Test your skills above');
	},
	
	ateam: 'adminteam',
	adminteam: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('<a><font size= 4><center><b><font color = 075ff7>The Admin Team</font></b></center></a><br />'+
		'FAQ <br />'+
		'<b>Who are we?</b> The Admin team are a group of senior members who make most of the major league decisions and organize most major league events. <br />'+
		'<b>Who\'s in the Admin Team?</b> The Admin Team\'s active members consist of: Champion Noah, Champion Bart, OnyxEagle, Artiste Jeratt, Frontierhead Ninjarisu, Neith, Coach Bloodfist, E4 Abadon, Bamdee and Elite Frontier Blade. <br />'+
		'<b>What exactly do you guys do?</b> The Admin Team handle or oversee all matters from disputes in the League, to League Challenge Registration <br />'+
		'<b>How does one join the Admin team?</b> The Admin Team usually invites a select few senior members who\'ve shown to be mature and capable of handling responsibility. <br />'+
		' <br />'+
		'<center> All Admin team Members will be identifiable by having this badge on their cards:<center> <br />'+
		'<center><img src="http://oi62.tinypic.com/14cfyh0.jpg"></center> <br />');
	},

        gymtrainers: 'gym trainers',
		gymtrainers: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Here is a list of Sora League Gym Trainers:<br />' +
				'- <a href="http://soraleague.weebly.com/gym-trainers.html">Sora League Gym Trainers</a><br />' +
				'</div>');
	},

	champion: 'champions',
	champions: function(target, room, user) {
				if (!this.canBroadcast()) return;
				this.sendReplyBox('Here is a list of Sora League Champions:<br />' +
					'- <a href="http://soraleague.weebly.com/champions.html">Sora League Champions</a><br />' +
					'</div>');
	},
};

Object.merge(CommandParser.commands, trainerCards);
exports.trainerCards = trainerCards;
