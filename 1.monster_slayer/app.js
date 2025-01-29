const RandNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const app = Vue.createApp({
  data() {
    return {
      MonsterHealth: 100,
      PlayerHealth: 100,
      BattleLogs: [],
      FightNum: 1,
      GoongNum: 0,
    };
  },
  methods: {
    PlayerAttack() {
      const MonsterDamage = RandNum(10, 18);
      const UserDamage = RandNum(8, 15);
      this.MonsterHealth -= UserDamage;
      this.PlayerHealth -= MonsterDamage;
      this.BattleLogs.push(
        `${this.FightNum} : The Monster damaged ${UserDamage} | The Player damaged ${MonsterDamage}`
      );
      this.BattleLogs.push(
        `The Player ${this.PlayerHealth} | The Monster ${this.MonsterHealth} [${this.FightNum} | ${this.GoongNum}]`
      );
      this.FightNum += 1;
    },
    Goong() {
      if (this.FightNum < 3 || this.FightNum - this.GoongNum < 3) {
        alert(`Wait cooltime`);
        return;
      } else {
        const MonsterDamage = RandNum(10, 18);
        const UserDamage = RandNum(15, 25);
        this.MonsterHealth -= UserDamage;
        this.PlayerHealth -= MonsterDamage;
        this.BattleLogs.push(
          `${this.FightNum} : Goong !!! The Monster damaged ${UserDamage} | The Player damaged ${MonsterDamage}`
        );
        this.BattleLogs.push(
          `The Player ${this.PlayerHealth} | The Monster ${this.MonsterHealth} [${this.FightNum} | ${this.GoongNum}]`
        );
        this.GoongNum = this.FightNum;
        this.FightNum += 1;
      }
    },
  },
  computed: {
    MonsterBar() {
      return { width: this.MonsterHealth + "%" };
    },
    PlayerBar() {
      return { width: this.PlayerHealth + "%" };
    },
  },
});

app.mount("#game");
