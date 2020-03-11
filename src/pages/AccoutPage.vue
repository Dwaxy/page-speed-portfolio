<template>
<div class="account-page">
    <header>
        <div class="team">{{teamName}}</div>

       
        <div class="login">

        </div>
    </header>

    <div class="holder">
        <div class="left">

        </div>
        <div class="form">
            <form action="" @submit.prevent="processForm">
                <div class="names">
                    <input type="text" class="input" placeholder="Frist Name" v-model="formData.firstName">

                    <input type="text" class="input" placeholder="Last Name" v-model="formData.lastName">
                </div>

                <div class="bio">
                    <textarea class="input" cols="30" rows="10" placeholder="Bio..." v-model="formData.bio" />
                </div>

                <div class="education-job-desc">
                    <input type="text" class="input" placeholder="Education Provider" v-model="formData.education">
                    <input type="text" class="input" placeholder="Job Description" v-model="formData.jobDesc">
                </div>

                <div class="links">
                    <input type="text" class="input" placeholder="Email" v-model="formData.email">
                    <input type="text" class="input" placeholder="LinkedIn" v-model="formData.linkedin">
                    <input type="text" class="input" placeholder="GitHub" v-model="formData.github">
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "AccountPage",
    data: function () {
        return {
            teamName: "team name",
            formData: {
                firstName: "",
                lastName: "",
                bio: "",
                education: "",
                jobDesc: "",
                links: {
                    email: "",
                    github: "",
                    linkedin: "",
                },
                isSubmitted: false,
            }
        }
    },
    methods: {
        submitted() {
            this.isSubmitted = true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
