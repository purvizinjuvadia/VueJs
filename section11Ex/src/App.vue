<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>SignUp Form</h1>
                    <hr>
                    <div class="form-group">
                        <label>FirstName</label>
                        <input type="text" class="form-control" v-model="firstname">
                    </div>
                    <div class="form-group">
                        <label>LastName</label>
                        <input type="text" class="form-control" v-model="lastname">
                    </div>
                    <div class="form-group">
                        <label>Mail</label>
                        <input type="text" class="form-control" v-model="email">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" v-model="password">
                    </div>
                    <div class="form-group">
                        <label>
                           <input type="radio" value="Yes" v-model="storeData">Yes
                        </label>
                        <label>
                           <input type="radio" value="No" v-model="storeData">No
                        </label>
                    </div>
                </div>
            </div>
        </form>


                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->

        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ firstname }} {{ lastname }}</p>
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?:  {{ storeData }}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                firstname: '',
                lastname: '',
                fullname: '',
                email: '',
                password: '',
                storeData: true
            }

        },

        methods: {
            submitted() {
                this.isSubmitted = true;
            }
        },

    }
</script>

<style>
</style>
