module.exports = {
    isLogedIn: function() {
        return localStorage.userEmail !== undefined
    }
}