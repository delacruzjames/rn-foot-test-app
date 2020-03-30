import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer 9ceOkCZIySHaKkOYo3tf9tZo3b-6fcArciS06IpsDfXEZJN3BL2n81zIY-m5Qn8KydTLjLZQC69-1jlzxJzhl-6xYnSKE2wuRyTTJJD3SPx0Ygq-gOahkJPWGdWAXnYx'
  }
})
