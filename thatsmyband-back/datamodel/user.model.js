var UserSchema = new Schema({
    facebookProvider: {
          type: {
                id: String,
                token: String
          },
          select: false
    }
  });

UserSchema.statics.upsertFbUser = function(accessToken, refreshToken, profile, cb) {
    var user = { id = "USERID"};
    cb(err, user);    
  };