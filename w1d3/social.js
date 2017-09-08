var network = {
  data : {
    f01: {
      name: "Alice",
      age: 15,
      follows: ["f02", "f03", "f04"]
    },
    f02: {
      name: "Bob",
      age: 20,
      follows: ["f05", "f06"]
    },
    f03: {
      name: "Charlie",
      age: 35,
      follows: ["f01", "f04", "f06"]
    },
    f04: {
      name: "Debbie",
      age: 40,
      follows: ["f01", "f02", "f03", "f05", "f06"]
    },
    f05: {
      name: "Elizabeth",
      age: 45,
      follows: ["f04"]
    },
    f06: {
      name: "Finn",
      age: 25,
      follows: ["f05"]
    }
  },

    // Assist Functions
    getName: function(id){
    return this.data[id].name;
  },
  loopUsers: function (fn) {
    var results = [];
    for (var uid in this.data) { 
      //do something with data
      if (fn(uid)) {
        results.push(this.getName(uid));
      }
    }
    return results;
  },
  
  listUsersAndFollows: function(){
    for (var account in this.data) {
      var listedUser = this.data[account];
      var followList = [];
      // Collect Follws
      listedUser.follows.forEach((followedUser) => {
        followList.push(this.getName(followedUser));
      });
      // Collect Followers
      var followerList = network.loopUsers((id)=>{ 
        return network.data[id].follows.includes(account); 
      });
      console.log(`*********${this.getName(account)}*********\n`+
                  `>--follows:\n`+
                  `${followList.join("\n")}\n>--followers--\n`+
                  `${followerList.join("\n")}`);
    }
  },

  // Interface Functions
  mostUsersFollowed: function(){
    var result = 
    Object.keys(network.data).reduce((prev, current) => {
        if (network.data[current].follows.length > prev.max) {
          return {
            max: network.data[current].follows.length,
            users: [this.data[current].name]
          };
        } else if (network.data[current].follows.length === prev.max ){
          return {
            max: prev.max,
            users: prev.users.push(this.data[current].name)
          };         
        }
        return prev;
    }, { max: 0, users: [] });
    console.log(`Following the most (${result.max}): ${result.users.join(", ")}`);
  },

  mostFollowers: function(){
    var allFollows = {};
    var users = [];
    var followers = 0;
    //Collect array of all isntances of a follow
    for (var account in this.data){
      this.data[account].follows.forEach((followedAcct)=>{
         allFollows[followedAcct] = !allFollows[followedAcct]? 1 : allFollows[followedAcct] + 1;
      });
    }
    for (var uId in allFollows){
      if (allFollows[uId] > followers) {
        users = [this.data[uId].name];
        followers = allFollows[uId];
      } else if (allFollows[uId] === followers){
        users.push(this.data[uId].name);
      }
    }
    console.log(`Most Followers (${followers}): ${users.join(", ")}`);    
  },

  mostFollowersOver30: function(){
    var allFollows = {};
    var users = [];
    var followers = 0;
    //Collect array of all isntances of a follow
    for (var account in this.data){
      if (this.data[account].age > 30 ) {continue;}
      this.data[account].follows.forEach((followedAcct)=>{
         allFollows[followedAcct] = !allFollows[followedAcct]? 1 : allFollows[followedAcct] + 1;
      });
    }
    for (var uId in allFollows){
      if (allFollows[uId] > followers) {
        users = [this.data[uId].name];
        followers = allFollows[uId];
      } else if (allFollows[uId] === followers){
        users.push(this.data[uId].name) ;
      }
    }
    console.log(`Most Followers Over 30 (${followers}):  ${users.join(", ")}`);  
  },
  mostUsersOver30Followed: function(){
    var users = [];
    var following = 0;
    var resultObject = {};
    for (var user in this.data){
      resultObject[user] = 0;
      this.data[user].follows.forEach((a)=>{
          if (this.data[a].age > 30) {
            resultObject[user]++;
        }
      });
    }
    for (var uId in resultObject){
      if (resultObject[uId] > following) {
        users = [this.data[uId].name];
        following = resultObject[uId];
      } else if (resultObject[uId] === following){
        users = [this.data[uId].name];
      }
    }
    console.log(`Following the most over 30 (${following}):  ${users.join(", ")}`);  
  },
  stalkers: function(){
    var users = [];

    //
    for (var uid in this.data){
      var stalk = false;
      this.data[uid].follows.forEach((followed)=>{
        if (!this.data[followed].follows.includes(uid)){
          stalk = true;
        }
      });
     if (stalk) { users.push(this.data[uid].name);}
    } 
    
    //
    console.log(`Stalkers: ${users.join(", ")}`);
  },
  reach: function(){
    for (var uid in this.data){
      var lv1Reach = [];
      for (var lv1Reached in this.data){
        if (this.data[lv1Reached].follows.indexOf(uid) !== -1){
          lv1Reach.push(lv1Reached);
        }
      }
      console.log(`${this.data[uid].name} Level 1 Reach - ${lv1Reach}`);
      lv1Reach.forEach((follower)=>{
        for (var lv2Reached in this.data){
          if ((this.data[lv2Reached].follows.indexOf(follower) !== -1) && 
            (lv1Reach.indexOf(lv2Reached) === -1)){
              lv1Reach.push(lv2Reached);
          }
        }
      // console.log(`Level 2 ${follower} reaches ${lv2Reach}`);
      });
      console.log(`${this.data[uid].name} Level 2 Reach ${lv1Reach}`);
  }
}
};

function countFollows(id, condition){
  
}

// network.listUsersAndFollows();
// network.mostUsersFollowed();
// network.mostFollowers();
// network.mostFollowersOver30();
// network.mostUsersOver30Followed();
network.stalkers();
// network.reach();

// function test(){
//   x = 30;
//   var old = network.loopUsers(function(id){ return network.data[id].age > x; }, x);

//   console.log(old);
// }
// test();

/*   Extra   */

// Add New User

// Remove Users

// Check for ties in fns that calculate 'most..'