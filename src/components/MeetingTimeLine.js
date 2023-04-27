// @ is an alias to /src
//
export default {
    name: 'MeetingTimeLine',
    metaInfo: {
      title: "グループウェア - ミィーティング",
    },
    components: {
    },
    data: function () {
      return {
        window_height: 0,
        items: [
          {
            color: 'red lighten-2',
            icon: 'mdi-account',
            name: '山田さん',
            time: '15:00:00',
            text: '最初はい、それでは、時間になりましてすみません、少し遅れましたが始めたいと思います今夜はですね。宇都宮健児とズームこれでもう56回目になるんですけれども、本日のテーマはですね。東京を人権のまちに性的マイノリティlgbtqと語ると言うタイトルでお送りしたいと思います。私は司会致します。内田聖子と申します。よろしくお願いします。'
          },
          {
            color: 'purple darken-1',
            icon: 'mdi-account',
            name: '鈴木さん',
            time: '15:00:30',
            text: 'まずですね。宇都宮さん今外線からもう駆けつけで間に合いました。どうですか今日でちょうど半分ですけれども'
          },
          {
            color: 'green lighten-1',
            icon: 'mdi-account',
            name: '山本さん',
            time: '15:01:00',
            text: 'これから後半、戦に入るんですけどまあ今日の鎌田もそうですけど、その前は赤羽でやって、その前はまあ今日はおい多い街で会って、赤羽でやって蒲田でやったんですけど'
          },
          {
            color: 'purple darken-1',
            icon: 'mdi-account',
            name: '鈴木さん',
            time: '15:01:30',
            text: 'まあ毎回、あれですけどだんだん調子がこう膨れ上がって言ってですね。大変あの都知事選に対する関心が広がっているのとちょっとあの聴衆の熱気にね。僕も乗せられて、こっちもこう盛り上がるっていうのかそういうあの雰囲気が先週の土曜日、金曜か土曜、あたりから少しずつ出てきているなとだから、非常にあの私自身3度目だから'
          },
          {
            color: 'red lighten-2',
            icon: 'mdi-account',
            name: '山田さん',
            time: '15:02:10',
            text: '知ってる人は知ってるんですけどまあしばらくお休みがあったんで知らない人が多かったと思うんですけど、今日はあの赤羽からの蒲田への移動は牽引特選を使っていたんですけどたまたま隣に座った人が司法修習生で私のことも知っててまあ写真を撮ってもいいですかと言うことででその後座った人があの高校1年生ですけどやはりあの政治に関心があるからということでわざわざの演説を聞きに来てくれたりしてですね。'
          },
          {
            color: 'red lighten-2',
            icon: 'mdi-account',
            name: '山田さん',
            time: '15:02:40',
            text: ''
          },
        ],
      }
    },
    computed: {
      store: function () { return this.$store; },
      is_login: function () { return this.$store.getters['profile/is_login']; },
      token: function () { return this.$store.getters['profile/token']; },
      attendies() {
        let attendies = [];
        for (let ii = 0; ii < this.items.length; ii++) {
          const pick = attendies.filter((zzz) => {
            return zzz.name === this.items[ii].name;
          });
          if (pick.length <= 0) {
            attendies.push({
              name: this.items[ii].name,
              icon: this.items[ii].icon,
              color: this.items[ii].color,
            });
          }
        }
        return attendies;
      },
      timeline_height() {
        return this.window_height - 90;
      }
    },
    mounted: async function () {
      console.log("mounted: MeetingTimeLine");
      this.handleResize();
      window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy: function () {
      window.removeEventListener('resize', this.handleResize)
    },
    props: {
    },
    methods: {
      handleResize: function () {
        this.window_height = window.innerHeight;
      },
    }
  }
  //
  console.log("== MeetingTimeLine.js");
  