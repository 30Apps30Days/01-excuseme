var excuses = {
  // Anonymous-1
  "I can't swim.",
  "I cancelled my credit card.",
  "I cannot make this a priority right now.",
  "I don't have any snowpants.",
  "I get migraines when I do that.",
  "I had a really bad dream about that once.",
  "I have to go to the DMV.",
  "I left it in my Uber.",
  "I need to take my dog to the vet.",
  "I need to wash my car.",
  "I need to wash my cat.",
  "I need to wash my hair.",
  "I sprained my ankle.",
  "I'm gluten free.",
  "I'm having an art installation.",
  "I'm hungry.",
  "I'm pregnant.",
  "I'm tired.",
  "I'm waiting for the repairman.",
  "I've got a deadline coming up at work.",
  "I've got a family thing.",
  "It makes me break out in hives.",
  "It's raining outside.",
  "My dog ate it.",
  "My in-laws are in town.",
  "My internet is down.",
  "My spoon is too big.",

  // Anonymous-2
  "Can you believe the Russians hacked my alarm on my phone?!",
  "Daylight Savings, am I right?!",
  "I couldn't find matching socks.",
  "I couldn't get to my phone in time.",
  "I drank too much.",
  "I had to use the bathroom.",
  "I left my phone in my Uber.",
  "I was too dehydrated.",
  "I'm a vegan.",
  "I'm not really good at the whole math thing.",
  "My son soiled his pants.",
  "My wife said no.",
  "The lines this morning at Starbucks were ridiculous.",
  "The train conductor shut the doors on me.",
  "The train was delayed.",

  // Chanan Berkovits
  "I couldn't decide what to wear.",
  "My phone died.",
  "I had nothing to wear.",
  "It's my first day.",
  "I was stuck in quicksand.",
  "Do you know how long it takes to get here from Mars?",
  "I'm still processing my feelings.",
  "Train delays.",
  "My stagecoach broke down.",
  "I was ambushed by bandits.",
  "I'm planning to go to the emergency room that day.",
  "I've been in a coma for 20 years.",
  "I can't handle the stench.",
  "We used to date.",
  "Sorry, I don't speak English.",
  "Sorry, I don't speak whatever language you speak.",
  "Because your mama.",
  "My dog ate my parents.",
  "I have to go break my uncle out of jail.",
  "I have a proctologist appointment that I CAN'T reschedule.",
  "Does not compute.",
  "I'm overcome with ennui.",
  "It takes a while to teach a monkey to write poetry.",
  "I've been binge watching C-SPAN.",
  "I'm still coping with Brangelina's breakup.",
  "It's exhausting to keep up with the Kardashians.",
  "Because this is Trump's America.",
  "That's fake news.",
  "I want to help you, but I hate you.",
  "Not for all the tea in China.",
  "You can't handle the truth!.",
  "Because I don't like your face.",
  "I plan to be sick that day.",
  "Who are you? Where am I?.",
  "I consider that a microagression.",
  "I'm sorry, but there are some things man was not meant to know.",
  "I'm not doing that. Not after the last time....",
  "You've got the wrong guy.",
  "There's gonna be a bank heist, and I'm supposed to drive the getaway car.",
  "Ain't no one got time for that.",
  "Because I'm just a figment of your growing dementia.",
  "I'm away from my desk right now. Please leave a message. Beep.",
  "I can't blow my cover.",
  "I have a date with your sister.",
  "I was up late writing angry letters to the Jonas Brothers.",
  "You know what you did.",
  "My life coach says I shouldn't.",
  "Why bother? We're all gonna die.",
  "Whatever excuse would satisfy you.",
  "I can't hear you over all this noise.",
  "It has bad reviews on Yelp.",
  "I have to go home and change.",
  "I have ADD.",
  "I can't find anyone to cat sit.",
  "I've been blacklisted by every babysitter in town.",
  "Because truth is relative.",
  "It's against my religion.",
  "Trust me, you don't want to know.",
  "I'm late for my arraignment.",
  "Between bookbinding and ultimate fighting my schedule is packed.",
  "Because love is love.",
  "I don't have to explain myself to the likes of you.",
  "Four out of five dentists recommend that I ignore you.",
  "I'm not making excuses; I just don't care.",
  "The spirits warned me about you.",
  "That would require rewriting the laws of physics.",
  "I'm training for a hot dog eating contest.",
  "Because you're a ghost.",
  "I come from the future and I can't do anything that would alter the timeline.",

  // Matthew Garland
  "I didn't get out of bed this morning to do that sort of thing.",
  "I wish I could, but I don't want to.",
  "It has small parts and I'm allergic to choking hazards.",
  "Mercurcy is in retrograde, but I don't believe in astrology.",
  "My mother wouldn't approve.",
  "The color is offensive.",
  "Thousands of men and women have died protecting my freedom to not do that.",
  "Today's my turn to clip my grandfather's toenails.",

  // Maura Huff
  "I fell asleep.",
  "I got distracted.",
  "I got food poisoning.",
  "I had a date.",
  "I had a family reunion.",
  "I had a pipe burst.",
  "I had a video game marathon.",
  "I had to do laundry.",
  "I had to walk my dog.",
  "I had to wash my parent's car.",
  "I ran out of gas in my car.",
  "I slept through my alarm.",
  "I was at the hospital.",
  "I was learning guitar.",
  "I was too lazy.",
  "I was trolling Reddit.",
  "I went fishing.",
  "I went to a concert.",
  "My dog was sick.",
  "My friend was in town.",
  "My mom made me clean my room.",
  "My power was out.",
  "Netflix released a new original series.",
  "The Comcast maintenance worker showed up.",
  "The weather was too nice.",

  // Jeffrey Klein
  "My dog said I could take your stuff.",
  "I try to avoid situations that require excuses.",
  "I'm not authorized to do that.",

  // Ariel Lutati
  "I have to study for the SATs.",
  "I was visiting colleges over the weekend.",

  // Andrew Ross
  "I don't remember my gmail password anymore.",
  "I lost your phone number.",
  "I need to check my email.",
  "I was just out with a few buddies. Honest.",
  "I'm having trouble thinking of excuses.",
  "I'm too poor right now.",
  "I'm trying to be thrifty this month.",
  "My car got a flat tire.",
  "My foot got stuck in a hole.",
  "My phone died.",
  "My wiper blades are too streaky.",
  "That's not lipstick, it's a cherry soda stain.",

  // Lily Wong
  "I can't decide.",
  "I didn't get a chance to look at it.",
  "I didn't think it'd be this popular.",
  "I got stopped by Greenpeace workers on the sidewalk.",
  "I had no choice.",
  "I haven't slept well.",
  "I lost track of time.",
  "I misheard that.",
  "I thought you were going to do it.",
  "I thought you wouldn't notice.",
  "I woke up on the wrong side of the bed.",
  "I'll try again some other time.",
  "I'm having issues with my computer.",
  "I'm too old for this.",
  "It doesn't matter in the grand scheme of things.",
  "It looked good from far away.",
  "It sounded like a good idea at the time.",
  "It worked when I tried it.",
  "It's easier this way.",
  "My commute was terrible.",
  "My key got stuck.",
  "My phone died.",
  "My socks are wet.",
  "No one told me to stop.",
  "That came out of nowhere.",
  "The instructions are confusing.",
  "The seller said it was real.",
  "The sun was in my eyes.",
  "There was a typo.",
  "They were all out of the chocolate ones.",
  "They were all there the last time I checked.",
  "Your notes are hard to read.",
];

// From: https://github.com/lodash/lodash/blob/master/shuffle.js
function shuffle(array) {
  var length = array == null ? 0 : array.length;
  if (!length) { return []; }

  var index = -1;
  var lastIndex = length - 1;
  var result = array;
  while (++index < length) {
    var rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
    var value = result[rand];
    result[rand] = result[index];
    result[index] = value;
  }
  return result
}

var app = {
  init: function () {
    var evt = this.render.bind(this);
    document.addEventListener('click', evt, false);
    document.addEventListener('deviceready', evt, false);
    document.addEventListener('DOMContentLoaded', evt, false);

    if(!cordova) {
      document.getElementsByClassName('.web-only').forEach(function (item) {

      });
    }

    this.reset();
  },

  reset: function () {
    excuses = shuffle(excuses);
    excuses.push(false);
  },

  pick: function () {
    var excuse = excuses.splice(0, 1)[0];
    if (!excuse) {
      this.reset();
      excuse = excuses.splice(0, 1)[0];
    }
    excuses.push(excuse);
    return excuse;
  },

  render: function () {
    document.getElementById('app').innerText = this.pick();
  }
};

app.init();
