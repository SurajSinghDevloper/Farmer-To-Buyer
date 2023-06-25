const mongoose = require('mongoose');
const User = mongoose.model('User');


module.exports.updateUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const updatedUser = req.body;
        console.log("👉👉👉 ~~ file: userController.js:9 ~~ module.exports.updateUser= ~~ updatedUser:", updatedUser)

        // Find the user by ID
        const user = await User.findByIdAndUpdate(userId);
        console.log("👉👉👉 ~~ file: userController.js:13 ~~ module.exports.updateUser= ~~ user:", user)

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Update user properties
        user.firstName = updatedUser.firstName;
        user.lastName = updatedUser.lastName;
        user.email = updatedUser.email;
        user.contactNumber = updatedUser.contactNumber;
        user.dob = updatedUser.dob;
        user.profilePic = updatedUser.profilePic;
        user.address = updatedUser.address;
        // Update other properties as needed

        // Save the updated user
        await user.save();

        // Send response
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports.getUser = async (req, res) => {
    try {
        const userId = req.params.userId;

        // Find the user by ID
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Send user data
        res.status(200).json(user);
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;

        // Find the user by ID and delete
        const user = await User.deleteOne({ _id: userId });

        if (user.deletedCount === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Send success response
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};








