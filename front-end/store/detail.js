import api from '@/utils/axios'

export const state = () => ({
    is_loading: false,
    type: null,
    data: null,
    backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(255, 205, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(201, 203, 207, 0.5)',
        'rgba(197, 70, 204, 0.5)',
        'rgba(255, 180, 179, 0.5)',
        'rgba(255, 230, 128, 0.5)',
        'rgba(204, 100, 1, 0.5)',
        'rgba(230, 106, 103, 0.5)',
        'rgba(80, 230, 128, 0.5)',
        'rgba(0, 209, 193 , 0.5)',
        'rgba(41, 49, 204, 0.5)',
        'rgba(128, 133, 255, 0.5)',
    ]
})

export const mutations = {
    MU_LOADING: (state, payload) => {
        state.is_loading = payload
    },
    MU_TYPE: (state, payload) => {
        state.type = payload
    },
    MU_DATA: (state, payload) => {
        state.data = payload
    }
}

export const actions = {
    AC_EXPENSE: ({ commit }) => {
        // commit('MU_LOADING', true)
        // api({
        //     url: `/expense`,
        //     method: 'get'
        // }).then(res => {
        //     commit('MU_DATA', res.data)
        //     commit('MU_LOADING', false)
        // })
        const data = {
            list: [
                {
                "user_seq_no": "U123456789",
                "card_value": "삼성카드",
                "paid_date": "22-06-24",
                "paid_time": "06:51:41",
                "paid_amt": 31987,
                "store_cat": "통신",
                "merchant_name_masked": "sk텔레콤"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-22",
                "paid_time": "02:26:18",
                "paid_amt": 39914,
                "store_cat": "편의점마트잡화",
                "merchant_name_masked": "편의점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-26",
                "paid_time": "12:37:34",
                "paid_amt": 25047,
                "store_cat": "통신",
                "merchant_name_masked": "sk텔레콤"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-12",
                "paid_time": "06:56:15",
                "paid_amt": 30524,
                "store_cat": "카페간식",
                "merchant_name_masked": "스타벅스종로점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-18",
                "paid_time": "06:00:47",
                "paid_amt": 25484,
                "store_cat": "쇼핑",
                "merchant_name_masked": "교보문고"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "삼성카드",
                "paid_date": "22-06-29",
                "paid_time": "00:10:50",
                "paid_amt": 30713,
                "store_cat": "통신",
                "merchant_name_masked": "sk텔레콤"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "삼성카드",
                "paid_date": "22-06-18",
                "paid_time": "18:59:05",
                "paid_amt": 46456,
                "store_cat": "식비",
                "merchant_name_masked": "맥도날드서초점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "삼성카드",
                "paid_date": "22-06-18",
                "paid_time": "19:38:09",
                "paid_amt": 31927,
                "store_cat": "금융",
                "merchant_name_masked": "페이코"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-13",
                "paid_time": "10:09:30",
                "paid_amt": 14697,
                "store_cat": "쇼핑",
                "merchant_name_masked": "교보문고"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-26",
                "paid_time": "21:04:50",
                "paid_amt": 15056,
                "store_cat": "쇼핑",
                "merchant_name_masked": "다이소혜화점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "삼성카드",
                "paid_date": "22-06-18",
                "paid_time": "10:07:55",
                "paid_amt": 1159,
                "store_cat": "취미여가",
                "merchant_name_masked": "인터파크티켓"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-03",
                "paid_time": "15:26:33",
                "paid_amt": 25564,
                "store_cat": "금융",
                "merchant_name_masked": "페이코"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-01",
                "paid_time": "17:25:21",
                "paid_amt": 17817,
                "store_cat": "편의점마트잡화",
                "merchant_name_masked": "편의점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "삼성카드",
                "paid_date": "22-06-25",
                "paid_time": "21:42:33",
                "paid_amt": 6856,
                "store_cat": "취미여가",
                "merchant_name_masked": "인터파크티켓"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-28",
                "paid_time": "01:35:02",
                "paid_amt": 38333,
                "store_cat": "취미여가",
                "merchant_name_masked": "인터파크티켓"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "삼성카드",
                "paid_date": "22-06-05",
                "paid_time": "19:33:12",
                "paid_amt": 3047,
                "store_cat": "쇼핑",
                "merchant_name_masked": "다이소혜화점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-29",
                "paid_time": "03:27:51",
                "paid_amt": 47898,
                "store_cat": "카페간식",
                "merchant_name_masked": "스타벅스종로점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-04",
                "paid_time": "21:44:18",
                "paid_amt": 18666,
                "store_cat": "교통자동차",
                "merchant_name_masked": "교통비"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-22",
                "paid_time": "10:02:09",
                "paid_amt": 7379,
                "store_cat": "식비",
                "merchant_name_masked": "kfc종로점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "삼성카드",
                "paid_date": "22-06-02",
                "paid_time": "19:56:46",
                "paid_amt": 27058,
                "store_cat": "통신",
                "merchant_name_masked": "sk텔레콤"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-26",
                "paid_time": "02:56:30",
                "paid_amt": 7504,
                "store_cat": "쇼핑",
                "merchant_name_masked": "다이소혜화점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-25",
                "paid_time": "04:51:07",
                "paid_amt": 16082,
                "store_cat": "식비",
                "merchant_name_masked": "맥도날드서초점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-25",
                "paid_time": "16:09:50",
                "paid_amt": 46355,
                "store_cat": "통신",
                "merchant_name_masked": "sk텔레콤"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "삼성카드",
                "paid_date": "22-06-13",
                "paid_time": "18:06:04",
                "paid_amt": 1417,
                "store_cat": "식비",
                "merchant_name_masked": "kfc종로점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-21",
                "paid_time": "05:54:14",
                "paid_amt": 14856,
                "store_cat": "쇼핑",
                "merchant_name_masked": "다이소혜화점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-01",
                "paid_time": "23:56:28",
                "paid_amt": 7396,
                "store_cat": "쇼핑",
                "merchant_name_masked": "무신사"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-14",
                "paid_time": "07:26:20",
                "paid_amt": 18889,
                "store_cat": "편의점마트잡화",
                "merchant_name_masked": "편의점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-17",
                "paid_time": "10:33:14",
                "paid_amt": 46562,
                "store_cat": "취미여가",
                "merchant_name_masked": "인터파크티켓"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "삼성카드",
                "paid_date": "22-06-26",
                "paid_time": "22:35:11",
                "paid_amt": 21110,
                "store_cat": "금융",
                "merchant_name_masked": "페이코"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-17",
                "paid_time": "03:03:22",
                "paid_amt": 5918,
                "store_cat": "쇼핑",
                "merchant_name_masked": "교보문고"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-07",
                "paid_time": "17:13:32",
                "paid_amt": 34618,
                "store_cat": "식비",
                "merchant_name_masked": "kfc종로점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-24",
                "paid_time": "22:02:44",
                "paid_amt": 7429,
                "store_cat": "쇼핑",
                "merchant_name_masked": "무신사"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-05",
                "paid_time": "03:41:31",
                "paid_amt": 19573,
                "store_cat": "편의점마트잡화",
                "merchant_name_masked": "편의점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-15",
                "paid_time": "06:10:34",
                "paid_amt": 42279,
                "store_cat": "식비",
                "merchant_name_masked": "맥도날드서초점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-16",
                "paid_time": "17:57:30",
                "paid_amt": 2545,
                "store_cat": "쇼핑",
                "merchant_name_masked": "교보문고"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-13",
                "paid_time": "17:25:46",
                "paid_amt": 25826,
                "store_cat": "금융",
                "merchant_name_masked": "페이코"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-20",
                "paid_time": "00:16:03",
                "paid_amt": 27992,
                "store_cat": "카페간식",
                "merchant_name_masked": "스타벅스종로점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-11",
                "paid_time": "03:47:47",
                "paid_amt": 16805,
                "store_cat": "편의점마트잡화",
                "merchant_name_masked": "편의점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-21",
                "paid_time": "03:55:11",
                "paid_amt": 2999,
                "store_cat": "금융",
                "merchant_name_masked": "페이코"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "삼성카드",
                "paid_date": "22-06-12",
                "paid_time": "23:15:29",
                "paid_amt": 18056,
                "store_cat": "취미여가",
                "merchant_name_masked": "인터파크티켓"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-28",
                "paid_time": "09:05:11",
                "paid_amt": 12096,
                "store_cat": "쇼핑",
                "merchant_name_masked": "무신사"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-16",
                "paid_time": "15:38:35",
                "paid_amt": 1081,
                "store_cat": "편의점마트잡화",
                "merchant_name_masked": "편의점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-04",
                "paid_time": "10:44:43",
                "paid_amt": 6780,
                "store_cat": "교통자동차",
                "merchant_name_masked": "교통비"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "삼성카드",
                "paid_date": "22-06-23",
                "paid_time": "21:37:22",
                "paid_amt": 4057,
                "store_cat": "쇼핑",
                "merchant_name_masked": "교보문고"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-02",
                "paid_time": "22:29:49",
                "paid_amt": 44591,
                "store_cat": "편의점마트잡화",
                "merchant_name_masked": "편의점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-18",
                "paid_time": "21:34:48",
                "paid_amt": 19714,
                "store_cat": "쇼핑",
                "merchant_name_masked": "무신사"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "삼성카드",
                "paid_date": "22-06-06",
                "paid_time": "03:45:05",
                "paid_amt": 16834,
                "store_cat": "식비",
                "merchant_name_masked": "맥도날드서초점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "삼성카드",
                "paid_date": "22-06-11",
                "paid_time": "18:13:52",
                "paid_amt": 35056,
                "store_cat": "식비",
                "merchant_name_masked": "kfc종로점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "삼성카드",
                "paid_date": "22-06-27",
                "paid_time": "09:12:04",
                "paid_amt": 4244,
                "store_cat": "쇼핑",
                "merchant_name_masked": "무신사"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-01",
                "paid_time": "14:31:05",
                "paid_amt": 3180,
                "store_cat": "편의점마트잡화",
                "merchant_name_masked": "편의점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "삼성카드",
                "paid_date": "22-06-04",
                "paid_time": "19:44:29",
                "paid_amt": 31430,
                "store_cat": "쇼핑",
                "merchant_name_masked": "교보문고"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-21",
                "paid_time": "09:12:44",
                "paid_amt": 13602,
                "store_cat": "식비",
                "merchant_name_masked": "맥도날드서초점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-30",
                "paid_time": "21:12:31",
                "paid_amt": 7131,
                "store_cat": "쇼핑",
                "merchant_name_masked": "교보문고"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-02",
                "paid_time": "06:32:08",
                "paid_amt": 47499,
                "store_cat": "편의점마트잡화",
                "merchant_name_masked": "편의점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-07",
                "paid_time": "21:13:59",
                "paid_amt": 27614,
                "store_cat": "금융",
                "merchant_name_masked": "페이코"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-04",
                "paid_time": "01:40:00",
                "paid_amt": 26562,
                "store_cat": "취미여가",
                "merchant_name_masked": "인터파크티켓"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-24",
                "paid_time": "21:24:04",
                "paid_amt": 4667,
                "store_cat": "식비",
                "merchant_name_masked": "맥도날드서초점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-13",
                "paid_time": "09:27:14",
                "paid_amt": 26988,
                "store_cat": "취미여가",
                "merchant_name_masked": "인터파크티켓"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "삼성카드",
                "paid_date": "22-06-28",
                "paid_time": "13:27:59",
                "paid_amt": 7657,
                "store_cat": "교통자동차",
                "merchant_name_masked": "교통비"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-27",
                "paid_time": "10:51:36",
                "paid_amt": 33032,
                "store_cat": "통신",
                "merchant_name_masked": "sk텔레콤"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-13",
                "paid_time": "02:34:56",
                "paid_amt": 44777,
                "store_cat": "금융",
                "merchant_name_masked": "페이코"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-29",
                "paid_time": "20:05:08",
                "paid_amt": 4584,
                "store_cat": "쇼핑",
                "merchant_name_masked": "다이소혜화점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-08",
                "paid_time": "06:30:22",
                "paid_amt": 35712,
                "store_cat": "취미여가",
                "merchant_name_masked": "인터파크티켓"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-12",
                "paid_time": "20:11:46",
                "paid_amt": 44025,
                "store_cat": "금융",
                "merchant_name_masked": "페이코"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "삼성카드",
                "paid_date": "22-06-08",
                "paid_time": "20:57:23",
                "paid_amt": 36094,
                "store_cat": "편의점마트잡화",
                "merchant_name_masked": "편의점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-04",
                "paid_time": "14:25:55",
                "paid_amt": 9763,
                "store_cat": "편의점마트잡화",
                "merchant_name_masked": "편의점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-29",
                "paid_time": "21:01:03",
                "paid_amt": 45124,
                "store_cat": "카페간식",
                "merchant_name_masked": "스타벅스종로점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-04",
                "paid_time": "19:05:25",
                "paid_amt": 30758,
                "store_cat": "금융",
                "merchant_name_masked": "페이코"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "삼성카드",
                "paid_date": "22-06-05",
                "paid_time": "12:43:02",
                "paid_amt": 8101,
                "store_cat": "쇼핑",
                "merchant_name_masked": "교보문고"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-06",
                "paid_time": "06:48:17",
                "paid_amt": 27027,
                "store_cat": "통신",
                "merchant_name_masked": "sk텔레콤"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "삼성카드",
                "paid_date": "22-06-20",
                "paid_time": "11:33:35",
                "paid_amt": 39672,
                "store_cat": "쇼핑",
                "merchant_name_masked": "무신사"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "삼성카드",
                "paid_date": "22-06-14",
                "paid_time": "01:22:07",
                "paid_amt": 14136,
                "store_cat": "편의점마트잡화",
                "merchant_name_masked": "편의점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-15",
                "paid_time": "20:36:40",
                "paid_amt": 10940,
                "store_cat": "쇼핑",
                "merchant_name_masked": "다이소혜화점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "삼성카드",
                "paid_date": "22-06-26",
                "paid_time": "14:55:42",
                "paid_amt": 3609,
                "store_cat": "쇼핑",
                "merchant_name_masked": "무신사"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-04",
                "paid_time": "05:29:47",
                "paid_amt": 46715,
                "store_cat": "금융",
                "merchant_name_masked": "페이코"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-01",
                "paid_time": "20:48:03",
                "paid_amt": 2317,
                "store_cat": "쇼핑",
                "merchant_name_masked": "교보문고"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "삼성카드",
                "paid_date": "22-06-08",
                "paid_time": "23:21:50",
                "paid_amt": 17867,
                "store_cat": "통신",
                "merchant_name_masked": "sk텔레콤"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-23",
                "paid_time": "03:57:11",
                "paid_amt": 5282,
                "store_cat": "통신",
                "merchant_name_masked": "sk텔레콤"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-09",
                "paid_time": "18:25:05",
                "paid_amt": 8540,
                "store_cat": "쇼핑",
                "merchant_name_masked": "교보문고"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-27",
                "paid_time": "23:07:04",
                "paid_amt": 49320,
                "store_cat": "식비",
                "merchant_name_masked": "맥도날드서초점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-23",
                "paid_time": "18:43:31",
                "paid_amt": 11436,
                "store_cat": "교통자동차",
                "merchant_name_masked": "교통비"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-24",
                "paid_time": "01:14:22",
                "paid_amt": 44006,
                "store_cat": "쇼핑",
                "merchant_name_masked": "무신사"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-24",
                "paid_time": "16:37:42",
                "paid_amt": 11601,
                "store_cat": "쇼핑",
                "merchant_name_masked": "다이소혜화점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-25",
                "paid_time": "15:28:46",
                "paid_amt": 43682,
                "store_cat": "통신",
                "merchant_name_masked": "sk텔레콤"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-13",
                "paid_time": "17:11:36",
                "paid_amt": 46284,
                "store_cat": "카페간식",
                "merchant_name_masked": "스타벅스종로점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-25",
                "paid_time": "12:06:02",
                "paid_amt": 43272,
                "store_cat": "쇼핑",
                "merchant_name_masked": "무신사"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-20",
                "paid_time": "19:07:01",
                "paid_amt": 11954,
                "store_cat": "편의점마트잡화",
                "merchant_name_masked": "편의점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-03",
                "paid_time": "18:14:15",
                "paid_amt": 5151,
                "store_cat": "식비",
                "merchant_name_masked": "맥도날드서초점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "삼성카드",
                "paid_date": "22-06-22",
                "paid_time": "21:55:30",
                "paid_amt": 33892,
                "store_cat": "금융",
                "merchant_name_masked": "페이코"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-16",
                "paid_time": "11:04:44",
                "paid_amt": 5584,
                "store_cat": "교통자동차",
                "merchant_name_masked": "교통비"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-15",
                "paid_time": "04:39:49",
                "paid_amt": 16782,
                "store_cat": "금융",
                "merchant_name_masked": "페이코"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-06",
                "paid_time": "22:50:09",
                "paid_amt": 47034,
                "store_cat": "쇼핑",
                "merchant_name_masked": "무신사"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "삼성카드",
                "paid_date": "22-06-11",
                "paid_time": "18:46:40",
                "paid_amt": 17162,
                "store_cat": "편의점마트잡화",
                "merchant_name_masked": "편의점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-11",
                "paid_time": "22:27:40",
                "paid_amt": 37046,
                "store_cat": "교통자동차",
                "merchant_name_masked": "교통비"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-15",
                "paid_time": "20:10:04",
                "paid_amt": 1408,
                "store_cat": "쇼핑",
                "merchant_name_masked": "교보문고"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "신한카드",
                "paid_date": "22-06-17",
                "paid_time": "07:10:52",
                "paid_amt": 29607,
                "store_cat": "편의점마트잡화",
                "merchant_name_masked": "편의점"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-05",
                "paid_time": "06:38:28",
                "paid_amt": 21078,
                "store_cat": "쇼핑",
                "merchant_name_masked": "교보문고"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-19",
                "paid_time": "09:49:49",
                "paid_amt": 14616,
                "store_cat": "금융",
                "merchant_name_masked": "페이코"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "삼성카드",
                "paid_date": "22-06-29",
                "paid_time": "14:17:31",
                "paid_amt": 24637,
                "store_cat": "쇼핑",
                "merchant_name_masked": "무신사"
                },
                {
                "user_seq_no": "U123456789",
                "card_value": "우리카드",
                "paid_date": "22-06-02",
                "paid_time": "04:13:04",
                "paid_amt": 44952,
                "store_cat": "쇼핑",
                "merchant_name_masked": "교보문고"
                }
            ]
        }
        commit('MU_DATA', data)
    },
    AC_CARD: ({ commit }) => {
        // commit('MU_LOADING', true)
        // api({
        //     url: `/card`,
        //     method: 'get'
        // }).then(res => {
        //     commit('MU_DATA', res.data)
        //     commit('MU_LOADING', false)
        // })
        const data = {
            list: [
                {
                  "cards": "우리카드",
                  "payAmount": 573200,
                  "target": 700000
                },
                {
                  "cards": "삼성카드",
                  "payAmount": 63400,
                  "target": 236600
                },
                {
                  "cards": "신한카드",
                  "payAmount": 302000,
                  "target": 198000
                }
            ]
        }
        commit('MU_DATA', data)
    },
    AC_INSURANCE: ({ commit }) => {
        // commit('MU_LOADING', true)
        // api({
        //     url: `/insurance`,
        //     method: 'get'
        // }).then(res => {
        //     commit('MU_DATA', res.data)
        //     commit('MU_LOADING', false)
        // })
        const data = {
            list: [
                {
                    "user_seq_no": "U123456789",
                    "guarant_age": 37.3,
                    "num_pay": 100,
                    "remain_pay": 17,
                    "expire_date": "2030년 3월 29일",
                    "guarant_date": "2030년 3월 29일",
                    "insurance_name": "AIG튼튼한 New치아보험2111(2종)",
                    "month_paid": 9920,
                    "total_paid": 1190400,
                    "warrant_detail": "치과 보험"
                },
                {
                    "user_seq_no": "U123456789",
                    "guarant_age": 30,
                    "num_pay": 5,
                    "remain_pay": 7,
                    "expire_date": "2022년 12월 31일",
                    "guarant_date": "2022년 12월 31일",
                    "insurance_name": "삼성화재 애니카 다이렉트 자동차보험",
                    "month_paid": 27330,
                    "total_paid": 327960,
                    "warrant_detail": "자동차 사고 보험"
                },
                {
                    "user_seq_no": "U123456789",
                    "guarant_age": 109.5,
                    "num_pay": 30,
                    "remain_pay": 309,
                    "expire_date": "2062년 6월 15일",
                    "guarant_date": "2102년 6월 15일",
                    "insurance_name": "삼성 인터넷연금보험1.9",
                    "month_paid": 200000,
                    "total_paid": 96000000,
                    "warrant_detail": "연금 보험"
                }
            ]
        }
        commit('MU_DATA', data)
    }
}