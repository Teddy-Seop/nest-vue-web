import Vue from 'vue';
import dayjs from "dayjs";

Vue.filter("dateTime", (format: string) => {
    console.log(format)
    return dayjs(format).format("YYYY-MM-DD HH:MM");
})