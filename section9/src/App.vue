<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <hr>
                <p>{{ selectedComponent }} </p>
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>Default Component</p>

                    </component>
                </keep-alive>
 <!--               <app-quote>
                    <h1 slot="title">{{ quoteTitle }}</h1>
                    <p>A nice Quote!</p>
                </app-quote>-->
               
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue'
    import Author from './components/Author.vue'
    import New from './components/New.vue'

    export default {
        data: function() {
            return {
                selectedComponent: 'appQuote',
                quoteTitle: 'The Quote'
            }
        },


        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New

        }
        
    }
</script>

<style>
</style>
