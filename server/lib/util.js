import moment from 'moment';

const addTimeStamp=()=>{
    return moment.utc().format('YYYY-MM-DD HH:mm:ss')
}

export { addTimeStamp }