'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Recipes', [
              { artist: "Radiohead", track: "Paranoid Android", album: "OK Computer", instructions: '<ol><li>Plug <u>Guitar</u> in to <u>Big Muff</u></li><li>Plug <u>Big Muff</u> in to <u>Mobius</u></li><li>Plug <u>Mobius</u> in to <u>Amplifier</u></li><li>Turn all "<strong>Tone</strong>" on <u>Guitar</u> to <strong>10</strong></li><li>Set Amplifier to the following settings</li><li class="ql-indent-1">Drive: On</li><li class="ql-indent-1">Gain: 8</li><li class="ql-indent-1">Presence: 7</li><li class="ql-indent-1">Treble: 6</li><li class="ql-indent-1">Bass: 4.5</li><li class="ql-indent-1">Reverb: 3</li><li>Set Big Muff to the following settings</li><li class="ql-indent-1">Volume: High</li><li class="ql-indent-1">Tone: High</li><li class="ql-indent-1">Sustain: 7.5</li></ol>', instrument: "Lead Guitar", sampleURL: "https://youtu.be/fHiGbolFFGw?t=337", createdAt: new Date(), updatedAt: new Date(), id: 10000 },
              { artist: "Muse", track: "Knights of Cydonia", album: "Black Holes & Revelations", instructions: '<ol><li>Plug <u>Guitar</u> in to <u>Big Muff</u></li><li>Plug <u>Big Muff</u> in to <u>Mobius</u></li><li>Plug <u>Mobius</u> in to <u>Amplifier</u></li><li>Turn all "<strong>Tone</strong>" on <u>Guitar</u> to <strong>10</strong></li><li>Set Amplifier to the following settings</li><li class="ql-indent-1">Drive: On</li><li class="ql-indent-1">Gain: 8</li><li class="ql-indent-1">Presence: 7</li><li class="ql-indent-1">Treble: 6</li><li class="ql-indent-1">Bass: 4.5</li><li class="ql-indent-1">Reverb: 3</li><li>Set Big Muff to the following settings</li><li class="ql-indent-1">Volume: High</li><li class="ql-indent-1">Tone: High</li><li class="ql-indent-1">Sustain: 7.5</li></ol>', instrument: "Lead Guitar", sampleURL: "https://youtu.be/Q3Yc3HhSl1Q?t=160", createdAt: new Date(), updatedAt: new Date(), id: 10001 },
              { artist: "Cake", track: "The Distance", album: "Fashion Nugget", instructions: '<ol><li>Plug <u>Guitar</u> in to <u>Big Muff</u></li><li>Plug <u>Big Muff</u> in to <u>Mobius</u></li><li>Plug <u>Mobius</u> in to <u>Amplifier</u></li><li>Turn all "<strong>Tone</strong>" on <u>Guitar</u> to <strong>10</strong></li><li>Set Amplifier to the following settings</li><li class="ql-indent-1">Drive: On</li><li class="ql-indent-1">Gain: 8</li><li class="ql-indent-1">Presence: 7</li><li class="ql-indent-1">Treble: 6</li><li class="ql-indent-1">Bass: 4.5</li><li class="ql-indent-1">Reverb: 3</li><li>Set Big Muff to the following settings</li><li class="ql-indent-1">Volume: High</li><li class="ql-indent-1">Tone: High</li><li class="ql-indent-1">Sustain: 7.5</li></ol>', instrument: "Lead Guitar", sampleURL: "https://youtu.be/F_HoMkkRHv8?t=69", createdAt: new Date(), updatedAt: new Date(), id: 10002 },
              { artist: "Foo Fighters", track: "Everlong", album: "The Colour and the Shape", instructions: '<ol><li>Plug <u>Guitar</u> in to <u>Big Muff</u></li><li>Plug <u>Big Muff</u> in to <u>Mobius</u></li><li>Plug <u>Mobius</u> in to <u>Amplifier</u></li><li>Turn all "<strong>Tone</strong>" on <u>Guitar</u> to <strong>10</strong></li><li>Set Amplifier to the following settings</li><li class="ql-indent-1">Drive: On</li><li class="ql-indent-1">Gain: 8</li><li class="ql-indent-1">Presence: 7</li><li class="ql-indent-1">Treble: 6</li><li class="ql-indent-1">Bass: 4.5</li><li class="ql-indent-1">Reverb: 3</li><li>Set Big Muff to the following settings</li><li class="ql-indent-1">Volume: High</li><li class="ql-indent-1">Tone: High</li><li class="ql-indent-1">Sustain: 7.5</li></ol>', instrument: "Rhythm Guitar", sampleURL: "https://youtu.be/eBG7P-K-r1Y?t=12", createdAt: new Date(), updatedAt: new Date(), id: 10003 },
              { artist: "Rage Against the Machine", track: "Bulls On Parade", album: "Evil Empire", instructions: '<ol><li>Plug <u>Guitar</u> in to <u>Big Muff</u></li><li>Plug <u>Big Muff</u> in to <u>Mobius</u></li><li>Plug <u>Mobius</u> in to <u>Amplifier</u></li><li>Turn all "<strong>Tone</strong>" on <u>Guitar</u> to <strong>10</strong></li><li>Set Amplifier to the following settings</li><li class="ql-indent-1">Drive: On</li><li class="ql-indent-1">Gain: 8</li><li class="ql-indent-1">Presence: 7</li><li class="ql-indent-1">Treble: 6</li><li class="ql-indent-1">Bass: 4.5</li><li class="ql-indent-1">Reverb: 3</li><li>Set Big Muff to the following settings</li><li class="ql-indent-1">Volume: High</li><li class="ql-indent-1">Tone: High</li><li class="ql-indent-1">Sustain: 7.5</li></ol>', instrument: "Rhythm Guitar", sampleURL: "https://youtu.be/3L4YrGaR8E4?t=26", createdAt: new Date(), updatedAt: new Date(), id: 10004 }
          ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Recipes', null, {});

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
