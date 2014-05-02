ManagedUsers.availablePermissions = function() {
    // Return an object of key/value pairs, like:  {permissionName: "Permission Description", ....}
    // Do this in a file accessible by both the server and client.
    // return {};
    return {
      admin: 'Administrator',
      user: 'Regular User'
    }
}