<template>
    <section class="body-error error-inside">
        <div class="center-error">

            <div class="row">
                <div class="col-md-8">
                    <div class="main-error mb-xlg">
                        <h2 class="error-code text-dark text-center text-weight-semibold m-none">404
                            <i class="fa fa-file"></i>
                        </h2>
                        <p class="error-explanation text-center">We're sorry, but the page you were looking for doesn't exist.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <h4 class="text">Here are some useful links</h4>
                    <ul class="nav nav-list primary">
                        <li>
                            <router-link to="/">
                                <i class="fa fa-caret-right text-dark"></i> 回首頁
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  mounted() {
    this.$root.title = "找不到網頁";
  }
};
</script>