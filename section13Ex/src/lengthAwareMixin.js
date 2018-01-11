export const lengthAwareMixin = {
    computed: {
        lengthAware() {
            return this.secondtext  + ' (' + this.secondText.length + ') ';
        }

    }

};
