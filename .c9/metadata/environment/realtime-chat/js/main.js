{"filter":false,"title":"main.js","tooltip":"/realtime-chat/js/main.js","undoManager":{"mark":69,"position":69,"stack":[[{"start":{"row":478,"column":41},"end":{"row":479,"column":0},"action":"insert","lines":["",""],"id":1},{"start":{"row":479,"column":0},"end":{"row":479,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":479,"column":4},"end":{"row":491,"column":0},"action":"insert","lines":["  // まずはログインを試みる","  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {","    console.log(\"ログイン失敗:\", error);","    if (error.code === \"auth/user-not-found\") {","      // 該当ユーザが存在しない場合は新規作成する","      firebase.auth().createUserWithEmailAndPassword(email, password).then(function() { // 作成成功","        console.log(\"ユーザを作成しました\");","      }).catch(function(error) { // 作成失敗","        console.error(\"ユーザ作成に失敗:\", error);","      });","    }","  });",""],"id":2}],[{"start":{"row":479,"column":4},"end":{"row":479,"column":6},"action":"remove","lines":["  "],"id":3}],[{"start":{"row":480,"column":0},"end":{"row":480,"column":2},"action":"insert","lines":["  "],"id":4},{"start":{"row":481,"column":0},"end":{"row":481,"column":2},"action":"insert","lines":["  "]},{"start":{"row":482,"column":0},"end":{"row":482,"column":2},"action":"insert","lines":["  "]},{"start":{"row":483,"column":0},"end":{"row":483,"column":2},"action":"insert","lines":["  "]},{"start":{"row":484,"column":0},"end":{"row":484,"column":2},"action":"insert","lines":["  "]},{"start":{"row":485,"column":0},"end":{"row":485,"column":2},"action":"insert","lines":["  "]},{"start":{"row":486,"column":0},"end":{"row":486,"column":2},"action":"insert","lines":["  "]},{"start":{"row":487,"column":0},"end":{"row":487,"column":2},"action":"insert","lines":["  "]},{"start":{"row":488,"column":0},"end":{"row":488,"column":2},"action":"insert","lines":["  "]},{"start":{"row":489,"column":0},"end":{"row":489,"column":2},"action":"insert","lines":["  "]},{"start":{"row":490,"column":0},"end":{"row":490,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":490,"column":7},"end":{"row":491,"column":0},"action":"remove","lines":["",""],"id":5}],[{"start":{"row":525,"column":23},"end":{"row":526,"column":0},"action":"insert","lines":["",""],"id":6},{"start":{"row":526,"column":0},"end":{"row":526,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":526,"column":4},"end":{"row":531,"column":77},"action":"insert","lines":["var message = {","  uid: currentUID,","  text: \"メッセージ本文\",","  time: firebase.database.ServerValue.TIMESTAMP,","};","firebase.database().ref().child(\"messages/\" + currentRoomName).push(message);"],"id":8}],[{"start":{"row":527,"column":0},"end":{"row":527,"column":2},"action":"insert","lines":["  "],"id":9},{"start":{"row":528,"column":0},"end":{"row":528,"column":2},"action":"insert","lines":["  "]},{"start":{"row":529,"column":0},"end":{"row":529,"column":2},"action":"insert","lines":["  "]},{"start":{"row":530,"column":0},"end":{"row":530,"column":2},"action":"insert","lines":["  "]},{"start":{"row":531,"column":0},"end":{"row":531,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":527,"column":0},"end":{"row":527,"column":2},"action":"insert","lines":["  "],"id":10},{"start":{"row":528,"column":0},"end":{"row":528,"column":2},"action":"insert","lines":["  "]},{"start":{"row":529,"column":0},"end":{"row":529,"column":2},"action":"insert","lines":["  "]},{"start":{"row":530,"column":0},"end":{"row":530,"column":2},"action":"insert","lines":["  "]},{"start":{"row":531,"column":0},"end":{"row":531,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":528,"column":12},"end":{"row":528,"column":21},"action":"remove","lines":["\"メッセージ本文\""],"id":11},{"start":{"row":528,"column":12},"end":{"row":528,"column":13},"action":"insert","lines":["c"]},{"start":{"row":528,"column":13},"end":{"row":528,"column":14},"action":"insert","lines":["o"]},{"start":{"row":528,"column":14},"end":{"row":528,"column":15},"action":"insert","lines":["m"]},{"start":{"row":528,"column":15},"end":{"row":528,"column":16},"action":"insert","lines":["m"]},{"start":{"row":528,"column":16},"end":{"row":528,"column":17},"action":"insert","lines":["e"]},{"start":{"row":528,"column":17},"end":{"row":528,"column":18},"action":"insert","lines":["n"]},{"start":{"row":528,"column":18},"end":{"row":528,"column":19},"action":"insert","lines":["t"]}],[{"start":{"row":624,"column":20},"end":{"row":625,"column":0},"action":"insert","lines":["",""],"id":12},{"start":{"row":625,"column":0},"end":{"row":625,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":625,"column":4},"end":{"row":635,"column":3},"action":"insert","lines":["// priorityを2にすることで初期ルーム（priority=1）より順番的に後になる","firebase.database().ref(\"rooms/\" + roomName).setWithPriority({","  createdAt: firebase.database.ServerValue.TIMESTAMP,","  createdByUID: currentUID,","}, 2)",".then(function() {  // ルーム作成に成功したときの処理","  ","})",".catch(function(error) {","  console.error(\"ルーム作成に失敗:\", error);","});"],"id":13}],[{"start":{"row":626,"column":0},"end":{"row":626,"column":2},"action":"insert","lines":["  "],"id":16},{"start":{"row":627,"column":0},"end":{"row":627,"column":2},"action":"insert","lines":["  "]},{"start":{"row":628,"column":0},"end":{"row":628,"column":2},"action":"insert","lines":["  "]},{"start":{"row":629,"column":0},"end":{"row":629,"column":2},"action":"insert","lines":["  "]},{"start":{"row":630,"column":0},"end":{"row":630,"column":2},"action":"insert","lines":["  "]},{"start":{"row":631,"column":0},"end":{"row":631,"column":2},"action":"insert","lines":["  "]},{"start":{"row":632,"column":0},"end":{"row":632,"column":2},"action":"insert","lines":["  "]},{"start":{"row":633,"column":0},"end":{"row":633,"column":2},"action":"insert","lines":["  "]},{"start":{"row":634,"column":0},"end":{"row":634,"column":2},"action":"insert","lines":["  "]},{"start":{"row":635,"column":0},"end":{"row":635,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":626,"column":0},"end":{"row":626,"column":2},"action":"insert","lines":["  "],"id":17},{"start":{"row":627,"column":0},"end":{"row":627,"column":2},"action":"insert","lines":["  "]},{"start":{"row":628,"column":0},"end":{"row":628,"column":2},"action":"insert","lines":["  "]},{"start":{"row":629,"column":0},"end":{"row":629,"column":2},"action":"insert","lines":["  "]},{"start":{"row":630,"column":0},"end":{"row":630,"column":2},"action":"insert","lines":["  "]},{"start":{"row":631,"column":0},"end":{"row":631,"column":2},"action":"insert","lines":["  "]},{"start":{"row":632,"column":0},"end":{"row":632,"column":2},"action":"insert","lines":["  "]},{"start":{"row":633,"column":0},"end":{"row":633,"column":2},"action":"insert","lines":["  "]},{"start":{"row":634,"column":0},"end":{"row":634,"column":2},"action":"insert","lines":["  "]},{"start":{"row":635,"column":0},"end":{"row":635,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":635,"column":7},"end":{"row":641,"column":23},"action":"remove","lines":["","","    // TODO: ルーム作成に成功した場合は以下2つの処理を実行する","    // モーダルを非表示にする","    $(\"#createRoomModal\").modal(\"toggle\");","    // 作成したルームを表示","    showRoom(roomName);"],"id":18}],[{"start":{"row":630,"column":42},"end":{"row":636,"column":23},"action":"insert","lines":["","","    // TODO: ルーム作成に成功した場合は以下2つの処理を実行する","    // モーダルを非表示にする","    $(\"#createRoomModal\").modal(\"toggle\");","    // 作成したルームを表示","    showRoom(roomName);"],"id":19}],[{"start":{"row":630,"column":42},"end":{"row":631,"column":0},"action":"remove","lines":["",""],"id":20}],[{"start":{"row":636,"column":4},"end":{"row":636,"column":6},"action":"remove","lines":["  "],"id":21},{"start":{"row":636,"column":2},"end":{"row":636,"column":4},"action":"remove","lines":["  "]},{"start":{"row":636,"column":0},"end":{"row":636,"column":2},"action":"remove","lines":["  "]},{"start":{"row":635,"column":23},"end":{"row":636,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":631,"column":0},"end":{"row":631,"column":2},"action":"insert","lines":["  "],"id":22},{"start":{"row":632,"column":0},"end":{"row":632,"column":2},"action":"insert","lines":["  "]},{"start":{"row":633,"column":0},"end":{"row":633,"column":2},"action":"insert","lines":["  "]},{"start":{"row":634,"column":0},"end":{"row":634,"column":2},"action":"insert","lines":["  "]},{"start":{"row":635,"column":0},"end":{"row":635,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":630,"column":37},"end":{"row":630,"column":39},"action":"remove","lines":["とき"],"id":23}],[{"start":{"row":630,"column":37},"end":{"row":630,"column":39},"action":"insert","lines":["場合"],"id":28}],[{"start":{"row":630,"column":22},"end":{"row":630,"column":42},"action":"remove","lines":["  // ルーム作成に成功した場合の処理"],"id":29}],[{"start":{"row":378,"column":17},"end":{"row":379,"column":0},"action":"insert","lines":["",""],"id":30},{"start":{"row":379,"column":0},"end":{"row":379,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":379,"column":2},"end":{"row":379,"column":50},"action":"insert","lines":["firebase.database().ref(\"rooms/room1\").remove();"],"id":31}],[{"start":{"row":379,"column":26},"end":{"row":379,"column":39},"action":"remove","lines":["\"rooms/room1\""],"id":32},{"start":{"row":379,"column":26},"end":{"row":379,"column":27},"action":"insert","lines":["r"]},{"start":{"row":379,"column":27},"end":{"row":379,"column":28},"action":"insert","lines":["o"]},{"start":{"row":379,"column":28},"end":{"row":379,"column":29},"action":"insert","lines":["o"]},{"start":{"row":379,"column":29},"end":{"row":379,"column":30},"action":"insert","lines":["m"]}],[{"start":{"row":379,"column":30},"end":{"row":379,"column":31},"action":"insert","lines":["N"],"id":33}],[{"start":{"row":379,"column":26},"end":{"row":379,"column":31},"action":"remove","lines":["roomN"],"id":34},{"start":{"row":379,"column":26},"end":{"row":379,"column":34},"action":"insert","lines":["roomName"]}],[{"start":{"row":381,"column":24},"end":{"row":382,"column":0},"action":"insert","lines":["",""],"id":35},{"start":{"row":382,"column":0},"end":{"row":382,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":382,"column":2},"end":{"row":382,"column":53},"action":"insert","lines":["firebase.database().ref(\"messages/room1\").remove();"],"id":36}],[{"start":{"row":379,"column":26},"end":{"row":379,"column":27},"action":"insert","lines":["r"],"id":37},{"start":{"row":379,"column":27},"end":{"row":379,"column":28},"action":"insert","lines":["o"]},{"start":{"row":379,"column":28},"end":{"row":379,"column":29},"action":"insert","lines":["o"]}],[{"start":{"row":379,"column":28},"end":{"row":379,"column":29},"action":"remove","lines":["o"],"id":38},{"start":{"row":379,"column":27},"end":{"row":379,"column":28},"action":"remove","lines":["o"]},{"start":{"row":379,"column":26},"end":{"row":379,"column":27},"action":"remove","lines":["r"]}],[{"start":{"row":379,"column":26},"end":{"row":379,"column":27},"action":"insert","lines":["\""],"id":39},{"start":{"row":379,"column":27},"end":{"row":379,"column":28},"action":"insert","lines":["r"]},{"start":{"row":379,"column":28},"end":{"row":379,"column":29},"action":"insert","lines":["o"]},{"start":{"row":379,"column":29},"end":{"row":379,"column":30},"action":"insert","lines":["o"]},{"start":{"row":379,"column":30},"end":{"row":379,"column":31},"action":"insert","lines":["m"]},{"start":{"row":379,"column":31},"end":{"row":379,"column":32},"action":"insert","lines":["s"]},{"start":{"row":379,"column":32},"end":{"row":379,"column":33},"action":"insert","lines":["/"]},{"start":{"row":379,"column":33},"end":{"row":379,"column":34},"action":"insert","lines":["\""]}],[{"start":{"row":379,"column":34},"end":{"row":379,"column":35},"action":"insert","lines":[" "],"id":40},{"start":{"row":379,"column":35},"end":{"row":379,"column":36},"action":"insert","lines":["+"]}],[{"start":{"row":379,"column":36},"end":{"row":379,"column":37},"action":"insert","lines":[" "],"id":41}],[{"start":{"row":382,"column":36},"end":{"row":382,"column":37},"action":"insert","lines":["\""],"id":42}],[{"start":{"row":382,"column":37},"end":{"row":382,"column":38},"action":"insert","lines":[" "],"id":43},{"start":{"row":382,"column":38},"end":{"row":382,"column":39},"action":"insert","lines":["L"]}],[{"start":{"row":382,"column":39},"end":{"row":382,"column":40},"action":"insert","lines":[" "],"id":44}],[{"start":{"row":382,"column":39},"end":{"row":382,"column":40},"action":"remove","lines":[" "],"id":45},{"start":{"row":382,"column":38},"end":{"row":382,"column":39},"action":"remove","lines":["L"]}],[{"start":{"row":382,"column":38},"end":{"row":382,"column":39},"action":"insert","lines":["+"],"id":46}],[{"start":{"row":382,"column":39},"end":{"row":382,"column":40},"action":"insert","lines":[" "],"id":47}],[{"start":{"row":382,"column":40},"end":{"row":382,"column":46},"action":"remove","lines":["room1\""],"id":48},{"start":{"row":382,"column":40},"end":{"row":382,"column":41},"action":"insert","lines":["r"]},{"start":{"row":382,"column":41},"end":{"row":382,"column":42},"action":"insert","lines":["o"]},{"start":{"row":382,"column":42},"end":{"row":382,"column":43},"action":"insert","lines":["o"]}],[{"start":{"row":382,"column":40},"end":{"row":382,"column":43},"action":"remove","lines":["roo"],"id":49},{"start":{"row":382,"column":40},"end":{"row":382,"column":48},"action":"insert","lines":["roomName"]}],[{"start":{"row":384,"column":19},"end":{"row":385,"column":0},"action":"insert","lines":["",""],"id":50},{"start":{"row":385,"column":0},"end":{"row":385,"column":2},"action":"insert","lines":["  "]},{"start":{"row":385,"column":2},"end":{"row":385,"column":3},"action":"insert","lines":["l"]},{"start":{"row":385,"column":3},"end":{"row":385,"column":4},"action":"insert","lines":["o"]},{"start":{"row":385,"column":4},"end":{"row":385,"column":5},"action":"insert","lines":["c"]}],[{"start":{"row":385,"column":5},"end":{"row":385,"column":6},"action":"insert","lines":["a"],"id":51},{"start":{"row":385,"column":6},"end":{"row":385,"column":7},"action":"insert","lines":["t"]},{"start":{"row":385,"column":7},"end":{"row":385,"column":8},"action":"insert","lines":["i"]},{"start":{"row":385,"column":8},"end":{"row":385,"column":9},"action":"insert","lines":["o"]},{"start":{"row":385,"column":9},"end":{"row":385,"column":10},"action":"insert","lines":["n"]},{"start":{"row":385,"column":10},"end":{"row":385,"column":11},"action":"insert","lines":["."]},{"start":{"row":385,"column":11},"end":{"row":385,"column":12},"action":"insert","lines":["h"]},{"start":{"row":385,"column":12},"end":{"row":385,"column":13},"action":"insert","lines":["a"]}],[{"start":{"row":385,"column":11},"end":{"row":385,"column":13},"action":"remove","lines":["ha"],"id":52},{"start":{"row":385,"column":11},"end":{"row":385,"column":15},"action":"insert","lines":["hash"]}],[{"start":{"row":385,"column":15},"end":{"row":385,"column":16},"action":"insert","lines":[" "],"id":53},{"start":{"row":385,"column":16},"end":{"row":385,"column":17},"action":"insert","lines":["="]}],[{"start":{"row":385,"column":17},"end":{"row":385,"column":18},"action":"insert","lines":[" "],"id":54}],[{"start":{"row":385,"column":18},"end":{"row":385,"column":20},"action":"insert","lines":["\"\""],"id":55}],[{"start":{"row":385,"column":20},"end":{"row":385,"column":21},"action":"insert","lines":[";"],"id":56}],[{"start":{"row":385,"column":19},"end":{"row":385,"column":20},"action":"insert","lines":["#"],"id":57}],[{"start":{"row":385,"column":21},"end":{"row":385,"column":22},"action":"insert","lines":[" "],"id":58},{"start":{"row":385,"column":22},"end":{"row":385,"column":23},"action":"insert","lines":["+"]}],[{"start":{"row":385,"column":23},"end":{"row":385,"column":24},"action":"insert","lines":[" "],"id":59},{"start":{"row":385,"column":24},"end":{"row":385,"column":25},"action":"insert","lines":["d"]},{"start":{"row":385,"column":25},"end":{"row":385,"column":26},"action":"insert","lines":["e"]},{"start":{"row":385,"column":26},"end":{"row":385,"column":27},"action":"insert","lines":["f"]},{"start":{"row":385,"column":27},"end":{"row":385,"column":28},"action":"insert","lines":["a"]},{"start":{"row":385,"column":28},"end":{"row":385,"column":29},"action":"insert","lines":["u"]}],[{"start":{"row":385,"column":24},"end":{"row":385,"column":29},"action":"remove","lines":["defau"],"id":60},{"start":{"row":385,"column":24},"end":{"row":385,"column":39},"action":"insert","lines":["defaultRoomName"]}],[{"start":{"row":741,"column":17},"end":{"row":743,"column":9},"action":"remove","lines":["","","      // "],"id":61}],[{"start":{"row":741,"column":17},"end":{"row":741,"column":20},"action":"insert","lines":["したら"],"id":67}],[{"start":{"row":740,"column":104},"end":{"row":759,"column":9},"action":"remove","lines":["","      // アップロード成功したら画像表示用のURLを取得","      var url = snapshot.metadata.downloadURLs[0];","","      // 画像のロードが終わったらローディング表示を消して画像を表示","      $(\".settings-profile-image-preview\").load(function() {","        $(\".settings-profile-image-loading-container\").css({","          display: \"none\",","        });","        $(this).show();","      });","      $(\".settings-profile-image-preview\").attr({","        src: url,","      });","","      // ユーザ情報を更新","      firebase.database().ref(\"users/\" + currentUID).update({","        profileImageLocation: \"profile-images/\" + currentUID,","        updatedAt: firebase.database.ServerValue.TIMESTAMP,","      });"],"id":68},{"start":{"row":740,"column":104},"end":{"row":759,"column":7},"action":"insert","lines":["","    // アップロード成功したら画像表示用のURLを取得","    firebase.storage().ref(\"profile-images/\" + currentUID).getDownloadURL().then(function(url) {","      // 画像のロードが終わったらローディング表示を消して画像を表示","      $(\".settings-profile-image-preview\").load(function() {","        $(\".settings-profile-image-loading-container\").css({","          display: \"none\"","        });","        $(this).show();","      });","      $(\".settings-profile-image-preview\").attr({","        src: url","      });","","      // ユーザ情報を更新","      firebase.database().ref(\"users/\" + currentUID).update({","        profileImageLocation: \"profile-images/\" + currentUID,","        updatedAt: firebase.database.ServerValue.TIMESTAMP","      });","    });"]}],[{"start":{"row":741,"column":0},"end":{"row":741,"column":2},"action":"insert","lines":["  "],"id":69},{"start":{"row":742,"column":0},"end":{"row":742,"column":2},"action":"insert","lines":["  "]},{"start":{"row":743,"column":0},"end":{"row":743,"column":2},"action":"insert","lines":["  "]},{"start":{"row":744,"column":0},"end":{"row":744,"column":2},"action":"insert","lines":["  "]},{"start":{"row":745,"column":0},"end":{"row":745,"column":2},"action":"insert","lines":["  "]},{"start":{"row":746,"column":0},"end":{"row":746,"column":2},"action":"insert","lines":["  "]},{"start":{"row":747,"column":0},"end":{"row":747,"column":2},"action":"insert","lines":["  "]},{"start":{"row":748,"column":0},"end":{"row":748,"column":2},"action":"insert","lines":["  "]},{"start":{"row":749,"column":0},"end":{"row":749,"column":2},"action":"insert","lines":["  "]},{"start":{"row":750,"column":0},"end":{"row":750,"column":2},"action":"insert","lines":["  "]},{"start":{"row":751,"column":0},"end":{"row":751,"column":2},"action":"insert","lines":["  "]},{"start":{"row":752,"column":0},"end":{"row":752,"column":2},"action":"insert","lines":["  "]},{"start":{"row":753,"column":0},"end":{"row":753,"column":2},"action":"insert","lines":["  "]},{"start":{"row":754,"column":0},"end":{"row":754,"column":2},"action":"insert","lines":["  "]},{"start":{"row":755,"column":0},"end":{"row":755,"column":2},"action":"insert","lines":["  "]},{"start":{"row":756,"column":0},"end":{"row":756,"column":2},"action":"insert","lines":["  "]},{"start":{"row":757,"column":0},"end":{"row":757,"column":2},"action":"insert","lines":["  "]},{"start":{"row":758,"column":0},"end":{"row":758,"column":2},"action":"insert","lines":["  "]},{"start":{"row":759,"column":0},"end":{"row":759,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":378,"column":17},"end":{"row":379,"column":56},"action":"remove","lines":["","  firebase.database().ref(\"rooms/\" + roomName).remove();"],"id":70}],[{"start":{"row":380,"column":24},"end":{"row":381,"column":59},"action":"remove","lines":["","  firebase.database().ref(\"messages/\" + roomName).remove();"],"id":71}],[{"start":{"row":382,"column":19},"end":{"row":383,"column":40},"action":"remove","lines":["","  location.hash = \"#\" + defaultRoomName;"],"id":72}],[{"start":{"row":478,"column":41},"end":{"row":490,"column":7},"action":"remove","lines":["","    // まずはログインを試みる","    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {","      console.log(\"ログイン失敗:\", error);","      if (error.code === \"auth/user-not-found\") {","        // 該当ユーザが存在しない場合は新規作成する","        firebase.auth().createUserWithEmailAndPassword(email, password).then(function() { // 作成成功","          console.log(\"ユーザを作成しました\");","        }).catch(function(error) { // 作成失敗","          console.error(\"ユーザ作成に失敗:\", error);","        });","      }","    });"],"id":73}],[{"start":{"row":513,"column":23},"end":{"row":519,"column":81},"action":"remove","lines":["","    var message = {","      uid: currentUID,","      text: comment,","      time: firebase.database.ServerValue.TIMESTAMP,","    };","    firebase.database().ref().child(\"messages/\" + currentRoomName).push(message);"],"id":74}],[{"start":{"row":606,"column":20},"end":{"row":612,"column":22},"action":"remove","lines":["","    // priorityを2にすることで初期ルーム（priority=1）より順番的に後になる","    firebase.database().ref(\"rooms/\" + roomName).setWithPriority({","      createdAt: firebase.database.ServerValue.TIMESTAMP,","      createdByUID: currentUID,","    }, 2)","    .then(function() {"],"id":75}],[{"start":{"row":606,"column":20},"end":{"row":607,"column":0},"action":"insert","lines":["",""],"id":76},{"start":{"row":607,"column":0},"end":{"row":607,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":613,"column":0},"end":{"row":616,"column":7},"action":"remove","lines":["    })","    .catch(function(error) {","      console.error(\"ルーム作成に失敗:\", error);","    });"],"id":77},{"start":{"row":612,"column":25},"end":{"row":613,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":608,"column":4},"end":{"row":608,"column":6},"action":"remove","lines":["  "],"id":78}],[{"start":{"row":609,"column":4},"end":{"row":609,"column":6},"action":"remove","lines":["  "],"id":79}],[{"start":{"row":610,"column":4},"end":{"row":610,"column":6},"action":"remove","lines":["  "],"id":80}],[{"start":{"row":611,"column":4},"end":{"row":611,"column":6},"action":"remove","lines":["  "],"id":81}],[{"start":{"row":612,"column":4},"end":{"row":612,"column":6},"action":"remove","lines":["  "],"id":82}]]},"ace":{"folds":[],"scrolltop":5793.5,"scrollleft":0,"selection":{"start":{"row":382,"column":5},"end":{"row":382,"column":9},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":139,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1535613861941,"hash":"647828c83fd8aad3c5af84cb48f7c6a60929f0de"}