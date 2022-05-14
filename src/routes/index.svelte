<script context="module" type="ts">
    import { HomePageDocument } from '_config/graphql-tags/graphql-tags-generated'

    export const load: Load = async ({ stuff, url }) => {
        const defaultLimit = 6
        let limit = defaultLimit
        let page = parseInt(url.searchParams.get('page') ?? '1')
        let category = url.searchParams.get('category')
        let filterQuery = getPastWinnersFilterQuery(category)

        if (url.searchParams.get('page')) {
            if (page > 1) {
                limit = page * limit
            }
        }
        return {
            props: {
                category,
                currentPage: page,
                limit: defaultLimit,
                homePage: writable({data:{
    "home_page": {
        "id": "1",
        "title_bar_text": "yia! | Welcome to the Young Innovators Awards",
        "meta_description": "Young Innovator Awards creates tomorrow’s innovators by offering a hands-on, learn-by-doing experience. We challenge students to come up with a unique innovation that'll make the world a better place.",
        "enter_now_section_heading": "<h1>2022 &mdash; &nbsp;<br />Entries<br />now open</h1>",
        "enter_now_section_sub_heading": "Your ideas are unique. Share them and win!",
        "enter_now_section_body": "<p>&nbsp;</p>\n<p>yia! is all about you! We want to know your ideas for making the world better. If it&rsquo;s inspired by something you&rsquo;re passionate about &ndash; even better!</p>\n<p>&nbsp;</p>\n<p>Do you have an innovative idea?</p>",
        "enter_now_section_CTA_label": "Enter now",
        "hero_section_youtube_video_id": "95RJtSJ5AJg",
        "hero_section_right_side_svg": {
            "id": "f93b3d0f-f5f7-4187-a0f3-b413795e3b02",
            "filename_disk": "f93b3d0f-f5f7-4187-a0f3-b413795e3b02.svg",
            "description": null,
            "svg_code": "<svg id=\"Component_19_1\" data-name=\"Component 19 – 1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"100%\" height=\"100%\" viewBox=\"0 0 411.76 874.767\">\n  <defs>\n    <clipPath id=\"clip-path\">\n      <path id=\"Path_211\" data-name=\"Path 211\" d=\"M0,608.857H411.76V-265.91H0Z\" transform=\"translate(0 265.91)\"/>\n    </clipPath>\n  </defs>\n  <g id=\"Group_9\" data-name=\"Group 9\" clip-path=\"url(#clip-path)\">\n    <g id=\"Group_5\" data-name=\"Group 5\" transform=\"translate(0 0.001)\">\n      <path id=\"Path_207\" data-name=\"Path 207\" d=\"M220.511,552.6,18.22,633.428V571.411l130.444-50.464L18.22,468.772v-60.3l297.235,123.17v59.448ZM-55.249,380.2c-22.666,0-41.056-18.389-41.056-40.631s18.39-40.628,41.056-40.628c22.238,0,41.059,18.39,41.059,40.628S-33.011,380.2-55.249,380.2m184.665-283.1C60.562,97.107,14.8,46.639,14.8-6.822c0-21.807,5.987-38.486,17.959-48.754H18.22v-55.6H240.183v55.6H225.215c10.692,8.553,18.817,23.1,18.817,50.04,0,53.03-44.9,102.642-114.617,102.642M167.481-55.576H90.926c-12.833,7.7-22.666,21.386-22.666,42.77,0,26.087,20.952,53.458,61.156,53.458,37.21,0,61.159-25.66,61.159-53.886,0-20.1-7.7-35.072-23.094-42.342M274.393-241.339c22.666,0,41.059,18.393,41.059,40.631s-18.393,40.628-41.059,40.628c-22.238,0-41.056-18.39-41.056-40.628s18.817-40.631,41.056-40.631M240.7,311.346H18.74V367.8H240.7ZM-21.556-172.482H200.407v-56.455H-21.556Z\" transform=\"translate(96.305 241.339)\"/>\n    </g>\n    <g id=\"Group_6\" data-name=\"Group 6\" transform=\"translate(279.45 480.721)\">\n      <path id=\"Path_208\" data-name=\"Path 208\" d=\"M9.134,4.4a11.982,11.982,0,0,1,8.1,2.934l4.185-4.889c-2.79-2.6-6.744-4.372-12.287-4.372-6.471,0-11.82,3.813-11.82,9.82,0,3.773,2.556,6.8,7.441,8.432l7.362,2.418c1.721.559,2.7,1.582,2.7,3.03,0,1.859-1.773,3.444-5.31,3.444A15.112,15.112,0,0,1-.035,21.4l-3.954,5.027A20.15,20.15,0,0,0,9.275,31.547c7.172,0,12.054-3.954,12.054-10.1,0-4.05-2.323-7.122-7.491-8.8L6.295,10.223c-1.586-.51-2.471-1.207-2.471-2.559,0-1.77,1.911-3.26,5.31-3.26\" transform=\"translate(3.989 1.923)\"/>\n    </g>\n    <g id=\"Group_7\" data-name=\"Group 7\" transform=\"translate(250.21 481.139)\">\n      <path id=\"Path_209\" data-name=\"Path 209\" d=\"M8.941,0H-3.9V32.585H8.941c7.547,0,13.267-6,13.267-16.34C22.209,5.678,16.488,0,8.941,0M7.964,26.68H2.513V5.954H8.056c4.7,0,7.642,3.819,7.642,10.29,0,6.428-2.892,10.435-7.734,10.435\" transform=\"translate(3.905)\"/>\n    </g>\n    <g id=\"Group_8\" data-name=\"Group 8\" transform=\"translate(219.948 481.139)\">\n      <path id=\"Path_210\" data-name=\"Path 210\" d=\"M16.944,6.675c0-5.54-3.908-9.59-9.359-9.59H-7.4V29.67H-.982V16.59h5.03L9.917,29.67h7.168L10.8,15.659a9.15,9.15,0,0,0,6.145-8.984M6.611,10.356H-.982V3.319H6.749a3.435,3.435,0,0,1,3.678,3.54c0,2.145-1.536,3.5-3.816,3.5\" transform=\"translate(7.4 2.915)\"/>\n    </g>\n  </g>\n  <g id=\"Group_10\" data-name=\"Group 10\" transform=\"translate(185.31 481.139)\">\n    <path id=\"Path_212\" data-name=\"Path 212\" d=\"M7.323,0-3.2,32.585H3.135l2.234-6.938h12.9L20.5,32.585h6.56L16.537,0Zm0,19.6L11.839,5.823,16.307,19.6Z\" transform=\"translate(3.198)\"/>\n  </g>\n  <g id=\"Group_11\" data-name=\"Group 11\" transform=\"translate(142.805 481.139)\">\n    <path id=\"Path_213\" data-name=\"Path 213\" d=\"M25.565,0,19.883,22.16,13.972,0H7.037L1.217,22.531-4.556,0h-6.609L-2.74,32.585H4.52L10.432,9.543l5.915,23.041h7.26L32.17,0Z\" transform=\"translate(11.165)\"/>\n  </g>\n  <g id=\"Group_12\" data-name=\"Group 12\" transform=\"translate(113.38 481.139)\">\n    <path id=\"Path_214\" data-name=\"Path 214\" d=\"M7.323,0-3.2,32.585H3.131l2.234-6.938h12.9L20.5,32.585h6.56L16.537,0Zm0,19.6L11.836,5.823,16.307,19.6Z\" transform=\"translate(3.198)\"/>\n  </g>\n  <g id=\"Group_15\" data-name=\"Group 15\" clip-path=\"url(#clip-path)\">\n    <g id=\"Group_13\" data-name=\"Group 13\" transform=\"translate(344.771 429.204)\">\n      <path id=\"Path_215\" data-name=\"Path 215\" d=\"M12.667,12.925a9.147,9.147,0,0,0,6.145-8.984c0-5.543-3.911-9.586-9.359-9.586H-5.532V26.936H.886V13.856H5.913l5.866,13.08H18.95Zm-4.191-5.3H.886V.589H8.614a3.436,3.436,0,0,1,3.678,3.543c0,2.138-1.533,3.49-3.816,3.49\" transform=\"translate(5.532 5.645)\"/>\n    </g>\n    <g id=\"Group_14\" data-name=\"Group 14\" transform=\"translate(310.226 428.737)\">\n      <path id=\"Path_216\" data-name=\"Path 216\" d=\"M10.109,0C1.957,0-4.415,6.977-4.415,16.8c0,9.918,6.418,16.8,14.524,16.8,8.057,0,14.475-6.885,14.475-16.8C24.584,6.977,18.212,0,10.109,0m0,27.282C5.454,27.282,2.1,22.719,2.1,16.8c0-5.961,3.26-10.478,8.014-10.478,4.7,0,7.964,4.517,7.964,10.478,0,5.915-3.356,10.478-7.964,10.478\" transform=\"translate(4.415)\"/>\n    </g>\n  </g>\n  <g id=\"Group_16\" data-name=\"Group 16\" transform=\"translate(284.201 429.204)\">\n    <path id=\"Path_218\" data-name=\"Path 218\" d=\"M0,4.467H8.612V30.63h6.514V4.467h8.7V-1.951H0Z\" transform=\"translate(0 1.951)\"/>\n  </g>\n  <g id=\"Group_17\" data-name=\"Group 17\" transform=\"translate(254.545 429.203)\">\n    <path id=\"Path_219\" data-name=\"Path 219\" d=\"M13.736,0H4.522L-6,32.581H.33L2.564,25.65h12.9l2.234,6.931h6.563ZM4.522,19.6,9.038,5.82,13.506,19.6Z\" transform=\"translate(5.999)\"/>\n  </g>\n  <g id=\"Group_18\" data-name=\"Group 18\" transform=\"translate(227.033 429.203)\">\n    <path id=\"Path_220\" data-name=\"Path 220\" d=\"M15.517,0,7.744,23.972-.03,0H-6.777L3.974,32.581h7.31L22.034,0Z\" transform=\"translate(6.777)\"/>\n  </g>\n  <g id=\"Group_20\" data-name=\"Group 20\" clip-path=\"url(#clip-path)\">\n    <g id=\"Group_19\" data-name=\"Group 19\" transform=\"translate(196.771 428.737)\">\n      <path id=\"Path_221\" data-name=\"Path 221\" d=\"M10.107,23.392c8.057,0,14.475-6.885,14.475-16.8,0-9.826-6.372-16.8-14.475-16.8-8.149,0-14.521,6.977-14.521,16.8,0,9.918,6.418,16.8,14.521,16.8m0-27.282c4.7,0,7.964,4.517,7.964,10.478,0,5.915-3.352,10.478-7.964,10.478C5.452,17.066,2.1,12.5,2.1,6.588,2.1.627,5.356-3.89,10.107-3.89\" transform=\"translate(4.414 10.216)\"/>\n    </g>\n  </g>\n  <g id=\"Group_21\" data-name=\"Group 21\" transform=\"translate(165.391 429.204)\">\n    <path id=\"Path_223\" data-name=\"Path 223\" d=\"M13.512,14.837,2.425-6.48H-5.9V26.1H.517V3.432L12.439,26.1H19.93V-6.48H13.512Z\" transform=\"translate(5.901 6.48)\"/>\n  </g>\n  <g id=\"Group_22\" data-name=\"Group 22\" transform=\"translate(131.591 429.204)\">\n    <path id=\"Path_224\" data-name=\"Path 224\" d=\"M13.512,14.837,2.429-6.48H-5.9V26.1H.517V3.432L12.442,26.1H19.93V-6.48H13.512Z\" transform=\"translate(5.901 6.48)\"/>\n  </g>\n  <path id=\"Path_225\" data-name=\"Path 225\" d=\"M35.571-102.857h6.606v-32.585H35.571Z\" transform=\"translate(81.447 564.644)\"/>\n  <g id=\"Group_24\" data-name=\"Group 24\" clip-path=\"url(#clip-path)\">\n    <g id=\"Group_23\" data-name=\"Group 23\" transform=\"translate(235.769 376.867)\">\n      <path id=\"Path_226\" data-name=\"Path 226\" d=\"M10.4,23.328c7.681,0,13.544-5.257,13.544-15.08V5.267H10.308V10.85h7.31c-.138,3.731-2.98,6.2-7.079,6.2-5.26,0-8.57-4.892-8.57-10.428C1.968.8,5.321-3.862,10.262-3.862a7.22,7.22,0,0,1,5.915,2.747l4.885-4.053a12.93,12.93,0,0,0-10.8-5.02c-9.083,0-14.8,7.724-14.8,16.853,0,8.889,5.859,16.662,14.942,16.662\" transform=\"translate(4.542 10.188)\"/>\n    </g>\n  </g>\n  <g id=\"Group_25\" data-name=\"Group 25\" transform=\"translate(204.39 377.287)\">\n    <path id=\"Path_228\" data-name=\"Path 228\" d=\"M4.47,6.9,16.391,29.567h7.491V-3.014H17.464V18.3L6.374-3.014H-1.952V29.567H4.47Z\" transform=\"translate(1.952 3.014)\"/>\n  </g>\n  <g id=\"Group_28\" data-name=\"Group 28\" clip-path=\"url(#clip-path)\">\n    <g id=\"Group_26\" data-name=\"Group 26\" transform=\"translate(172.778 377.285)\">\n      <path id=\"Path_229\" data-name=\"Path 229\" d=\"M8.39,23.037c6.849,0,12.057-4.6,12.057-11.59V-10.061H14.028V10.845a5.559,5.559,0,0,1-5.639,5.82,5.553,5.553,0,0,1-5.632-5.82V-10.061H-3.664V11.447c0,6.987,5.162,11.59,12.054,11.59\" transform=\"translate(3.664 10.061)\"/>\n    </g>\n    <g id=\"Group_27\" data-name=\"Group 27\" transform=\"translate(138.7 376.821)\">\n      <path id=\"Path_230\" data-name=\"Path 230\" d=\"M10.109,23.392c8.057,0,14.475-6.885,14.475-16.8,0-9.826-6.372-16.8-14.475-16.8-8.152,0-14.524,6.977-14.524,16.8,0,9.918,6.418,16.8,14.524,16.8m0-27.282c4.7,0,7.964,4.513,7.964,10.478,0,5.915-3.352,10.478-7.964,10.478C5.451,17.066,2.1,12.5,2.1,6.588,2.1.624,5.355-3.89,10.109-3.89\" transform=\"translate(4.415 10.216)\"/>\n    </g>\n  </g>\n  <g id=\"Group_29\" data-name=\"Group 29\" transform=\"translate(112.909 377.285)\">\n    <path id=\"Path_232\" data-name=\"Path 232\" d=\"M6.675,22.68h6.514V7.646L22.778-9.9H15.563L9.977.569,4.441-9.9H-2.915L6.675,7.646Z\" transform=\"translate(2.915 9.905)\"/>\n  </g>\n</svg>\n",
            "__typename": "directus_files"
        },
        "innovator_section_heading": "i am an innovator",
        "innovator_section_body": "<p>Young Innovator Awards is a school competition helping to create tomorrow's innovators. Your ideas can win up to <strong>$2000 cash,</strong> plus the chance to develop your innovation with leading businesses.</p>",
        "innovator_section_CTA_label": "Learn more",
        "innovator_section_image": {
            "id": "07a100cf-603c-4123-836f-255ce41d8231",
            "filename_disk": "07a100cf-603c-4123-836f-255ce41d8231.jpg",
            "description": null,
            "svg_code": null,
            "__typename": "directus_files"
        },
        "brands_section_heading": "i am seen",
        "brands_section_description": "yia! is judged by some top New Zealand and international innovators, from brands such as...",
        "brands_section_CTA_label": "Meet this year's judges",
        "current_year_filter": {
            "id": "9",
            "year": "2022",
            "__typename": "judges_years"
        },
        "inspiration_articles": [
            {
                "id": "4",
                "inspiration_article": {
                    "id": "4",
                    "title": "Apple’s computerized glasses",
                    "body": "Apple’s computerized glasses will be as powerful as a Mac and launch at the end of 2022, according to top analyst Ming-Chi Kuo.",
                    "read_more_label": "VIEW LINK",
                    "read_more_link": "https://www.cnbc.com/2021/11/26/apple-ar-glasses-to-launch-in-2022-according-to-top-analyst.html",
                    "image": {
                        "id": "7c75e1d8-c16f-48ef-8a25-1be7a60aa041",
                        "filename_disk": "7c75e1d8-c16f-48ef-8a25-1be7a60aa041.png",
                        "description": null,
                        "svg_code": null,
                        "__typename": "directus_files"
                    },
                    "__typename": "inspiration_articles"
                },
                "__typename": "home_page_inspiration_articles"
            },
            {
                "id": "7",
                "inspiration_article": {
                    "id": "14",
                    "title": "yia! 2021 internships",
                    "body": "Check out the internship experiences of yia!'s 2021 winners!",
                    "read_more_label": "WATCH VIDEO",
                    "read_more_link": "https://www.youtube.com/watch?v=6rIRsU6Fwnw",
                    "image": {
                        "id": "17dafbe5-66d8-41c1-893a-b73d8b3e6653",
                        "filename_disk": "17dafbe5-66d8-41c1-893a-b73d8b3e6653.png",
                        "description": null,
                        "svg_code": null,
                        "__typename": "directus_files"
                    },
                    "__typename": "inspiration_articles"
                },
                "__typename": "home_page_inspiration_articles"
            },
            {
                "id": "8",
                "inspiration_article": {
                    "id": "7",
                    "title": "Rocket Lab launches 107th satellite to orbit",
                    "body": "Rocket Lab, a leading launch and space systems company, has successfully deployed two satellites to orbit for real-time geospatial monitoring company BlackSky.",
                    "read_more_label": "VIEW LINK",
                    "read_more_link": "https://www.rocketlabusa.com/updates/rocket-lab-launches-109th-satellite-to-orbit/",
                    "image": {
                        "id": "8d19f8d8-76ac-4b6b-bc01-8d1d7b2ea185",
                        "filename_disk": "8d19f8d8-76ac-4b6b-bc01-8d1d7b2ea185.png",
                        "description": null,
                        "svg_code": null,
                        "__typename": "directus_files"
                    },
                    "__typename": "inspiration_articles"
                },
                "__typename": "home_page_inspiration_articles"
            },
            {
                "id": "9",
                "inspiration_article": {
                    "id": "16",
                    "title": "Hunting for young problem solvers in the WBOP",
                    "body": "Priority One is calling Western Bay of Plenty’s young, bright minds to attend the virtual launch of the 2022 Young Innovator Awards (yia!) next Thursday, March 24. (Photo: Salina Galvan)",
                    "read_more_label": "VIEW LINK",
                    "read_more_link": "https://sunlive.co.nz/news/289549-hunting-young-problem-solvers-wbop.html",
                    "image": {
                        "id": "fe73de80-04ea-4740-9476-e8a71f836448",
                        "filename_disk": "fe73de80-04ea-4740-9476-e8a71f836448.jpg",
                        "description": null,
                        "svg_code": null,
                        "__typename": "directus_files"
                    },
                    "__typename": "inspiration_articles"
                },
                "__typename": "home_page_inspiration_articles"
            }
        ],
        "__typename": "home_page"
    },
    "past_winners_page": {
        "id": "1",
        "heading": "Check out some of our amazing young innovators",
        "__typename": "past_winners_page"
    },
    "past_winners_categories": [
        {
            "id": "1",
            "category": "Junior",
            "__typename": "past_winners_categories"
        },
        {
            "id": "2",
            "category": "Intermediate",
            "__typename": "past_winners_categories"
        },
        {
            "id": "3",
            "category": "Senior",
            "__typename": "past_winners_categories"
        },
        {
            "id": "9",
            "category": "Category Winner",
            "__typename": "past_winners_categories"
        },
        {
            "id": "11",
            "category": "Over 18s",
            "__typename": "past_winners_categories"
        },
        {
            "id": "12",
            "category": "People's Choice",
            "__typename": "past_winners_categories"
        },
        {
            "id": "13",
            "category": "Internship",
            "__typename": "past_winners_categories"
        },
        {
            "id": "14",
            "category": "Creativity Award",
            "__typename": "past_winners_categories"
        },
        {
            "id": "15",
            "category": "Research Award",
            "__typename": "past_winners_categories"
        },
        {
            "id": "16",
            "category": "Social Impact Award",
            "__typename": "past_winners_categories"
        },
        {
            "id": "17",
            "category": "Sustainability Award",
            "__typename": "past_winners_categories"
        },
        {
            "id": "18",
            "category": "Communication Award",
            "__typename": "past_winners_categories"
        }
    ],
    "past_winners_years": [
        {
            "id": "1",
            "year": 2021,
            "__typename": "past_winners_years"
        },
        {
            "id": "3",
            "year": 2020,
            "__typename": "past_winners_years"
        },
        {
            "id": "4",
            "year": 2019,
            "__typename": "past_winners_years"
        },
        {
            "id": "5",
            "year": 2018,
            "__typename": "past_winners_years"
        },
        {
            "id": "6",
            "year": 2017,
            "__typename": "past_winners_years"
        },
        {
            "id": "7",
            "year": 2016,
            "__typename": "past_winners_years"
        },
        {
            "id": "8",
            "year": 2015,
            "__typename": "past_winners_years"
        },
        {
            "id": "9",
            "year": 2014,
            "__typename": "past_winners_years"
        },
        {
            "id": "10",
            "year": 2013,
            "__typename": "past_winners_years"
        },
        {
            "id": "11",
            "year": 2012,
            "__typename": "past_winners_years"
        },
        {
            "id": "12",
            "year": 2011,
            "__typename": "past_winners_years"
        },
        {
            "id": "13",
            "year": 2010,
            "__typename": "past_winners_years"
        }
    ],
    "past_winners_aggregated": [
        {
            "count": {
                "id": 99,
                "__typename": "past_winners_aggregated_fields"
            },
            "__typename": "past_winners_aggregated"
        }
    ],
    "past_winners": [
        {
            "id": "1",
            "name": "FONG",
            "image": {
                "id": "60003622-cd24-4e94-8fac-ab030144162a",
                "filename_disk": "60003622-cd24-4e94-8fac-ab030144162a.jpg",
                "description": null,
                "svg_code": null,
                "__typename": "directus_files"
            },
            "short_description": "A product in the shape of something fun that slides over vaccination needles.",
            "year": [
                {
                    "id": "1",
                    "past_winners_year": {
                        "id": "1",
                        "year": 2021,
                        "__typename": "past_winners_years"
                    },
                    "__typename": "past_winners_past_winners_years"
                }
            ],
            "school_name": "Aquinas College",
            "students_name": "Isla Martin, Nina Young",
            "youtube_video_id": "U9JcCzczeMY",
            "project_information": null,
            "worksheets": [
                {
                    "id": "1",
                    "past_winners_worksheet": {
                        "id": "1",
                        "worksheet": {
                            "id": "8b1238ec-c5c2-45f9-b0b6-53f40e60c3d2",
                            "title": "618b0ab71831b963d5b10be8 Fong",
                            "filename_disk": "8b1238ec-c5c2-45f9-b0b6-53f40e60c3d2.pdf",
                            "__typename": "directus_files"
                        },
                        "__typename": "past_winners_worksheets"
                    },
                    "__typename": "past_winners_past_winners_worksheets"
                }
            ],
            "categories": [
                {
                    "id": "2",
                    "past_winners_category": {
                        "id": "2",
                        "category": "Intermediate",
                        "__typename": "past_winners_categories"
                    },
                    "__typename": "past_winners_past_winners_categories"
                },
                {
                    "id": "74",
                    "past_winners_category": {
                        "id": "12",
                        "category": "People's Choice",
                        "__typename": "past_winners_categories"
                    },
                    "__typename": "past_winners_past_winners_categories"
                }
            ],
            "__typename": "past_winners"
        },
        {
            "id": "2",
            "name": "Insightz",
            "image": {
                "id": "ed8baa80-ed40-4505-92a8-9e6a3c468fed",
                "filename_disk": "ed8baa80-ed40-4505-92a8-9e6a3c468fed.jpg",
                "description": null,
                "svg_code": null,
                "__typename": "directus_files"
            },
            "short_description": "A web-based data visualisation tool that converts grades into easy to understand graphs.",
            "year": [
                {
                    "id": "4",
                    "past_winners_year": {
                        "id": "1",
                        "year": 2021,
                        "__typename": "past_winners_years"
                    },
                    "__typename": "past_winners_past_winners_years"
                }
            ],
            "school_name": "Tauranga Boys' College",
            "students_name": "Michael Ren",
            "youtube_video_id": "Co1r9tVWI1A",
            "project_information": null,
            "worksheets": [
                {
                    "id": "2",
                    "past_winners_worksheet": {
                        "id": "2",
                        "worksheet": {
                            "id": "3753f690-956a-450d-98e2-31a4f4dd445f",
                            "title": "618b0a661831b921a1b10bd3 Insightz",
                            "filename_disk": "3753f690-956a-450d-98e2-31a4f4dd445f.pdf",
                            "__typename": "directus_files"
                        },
                        "__typename": "past_winners_worksheets"
                    },
                    "__typename": "past_winners_past_winners_worksheets"
                }
            ],
            "categories": [
                {
                    "id": "4",
                    "past_winners_category": {
                        "id": "3",
                        "category": "Senior",
                        "__typename": "past_winners_categories"
                    },
                    "__typename": "past_winners_past_winners_categories"
                },
                {
                    "id": "121",
                    "past_winners_category": {
                        "id": "14",
                        "category": "Creativity Award",
                        "__typename": "past_winners_categories"
                    },
                    "__typename": "past_winners_past_winners_categories"
                }
            ],
            "__typename": "past_winners"
        },
        {
            "id": "3",
            "name": "Networx",
            "image": {
                "id": "44a2b068-7863-465a-8bc1-e5218c373d75",
                "filename_disk": "44a2b068-7863-465a-8bc1-e5218c373d75.jpg",
                "description": null,
                "svg_code": null,
                "__typename": "directus_files"
            },
            "short_description": "A tracking device that attaches to fishing companies nets that connects to an app helping them retrieve the net if it is lost.",
            "year": [
                {
                    "id": "5",
                    "past_winners_year": {
                        "id": "1",
                        "year": 2021,
                        "__typename": "past_winners_years"
                    },
                    "__typename": "past_winners_past_winners_years"
                }
            ],
            "school_name": "Otumoetai College",
            "students_name": "Amelia Shorter, Cleo Putty, Erin Walpole, Haylee Hextall",
            "youtube_video_id": "iDRJ3eZq0pU",
            "project_information": null,
            "worksheets": [
                {
                    "id": "3",
                    "past_winners_worksheet": {
                        "id": "3",
                        "worksheet": {
                            "id": "c77386e2-2ff1-4baa-9a9b-8e5fe4978721",
                            "title": "618b09e414f628eca72213ec Networx 1",
                            "filename_disk": "c77386e2-2ff1-4baa-9a9b-8e5fe4978721.pdf",
                            "__typename": "directus_files"
                        },
                        "__typename": "past_winners_worksheets"
                    },
                    "__typename": "past_winners_past_winners_worksheets"
                }
            ],
            "categories": [
                {
                    "id": "5",
                    "past_winners_category": {
                        "id": "1",
                        "category": "Junior",
                        "__typename": "past_winners_categories"
                    },
                    "__typename": "past_winners_past_winners_categories"
                },
                {
                    "id": "122",
                    "past_winners_category": {
                        "id": "15",
                        "category": "Research Award",
                        "__typename": "past_winners_categories"
                    },
                    "__typename": "past_winners_past_winners_categories"
                }
            ],
            "__typename": "past_winners"
        },
        {
            "id": "4",
            "name": "AlgaeBoard",
            "image": {
                "id": "51c1994d-7b75-4993-8829-121f51b9d866",
                "filename_disk": "51c1994d-7b75-4993-8829-121f51b9d866.jpg",
                "description": null,
                "svg_code": null,
                "__typename": "directus_files"
            },
            "short_description": "An algae based alternative to cardboard packaging.",
            "year": [
                {
                    "id": "6",
                    "past_winners_year": {
                        "id": "1",
                        "year": 2021,
                        "__typename": "past_winners_years"
                    },
                    "__typename": "past_winners_past_winners_years"
                }
            ],
            "school_name": "Aquinas College",
            "students_name": "Alessandro Goodin",
            "youtube_video_id": "cmSUQOdjzMM",
            "project_information": null,
            "worksheets": [],
            "categories": [
                {
                    "id": "6",
                    "past_winners_category": {
                        "id": "2",
                        "category": "Intermediate",
                        "__typename": "past_winners_categories"
                    },
                    "__typename": "past_winners_past_winners_categories"
                }
            ],
            "__typename": "past_winners"
        },
        {
            "id": "5",
            "name": "Simply Positive",
            "image": {
                "id": "ae329c73-9e3f-4f22-9455-1aa30712bb6c",
                "filename_disk": "ae329c73-9e3f-4f22-9455-1aa30712bb6c.jpg",
                "description": null,
                "svg_code": null,
                "__typename": "directus_files"
            },
            "short_description": "To provide a free and effective app on Mental Health.",
            "year": [
                {
                    "id": "7",
                    "past_winners_year": {
                        "id": "1",
                        "year": 2021,
                        "__typename": "past_winners_years"
                    },
                    "__typename": "past_winners_past_winners_years"
                }
            ],
            "school_name": "Otumoetai College",
            "students_name": "Estee Taylor, Victoria Geck, Genevieve Kennerley",
            "youtube_video_id": "5ixgDXuRHr4",
            "project_information": null,
            "worksheets": [
                {
                    "id": "4",
                    "past_winners_worksheet": {
                        "id": "4",
                        "worksheet": {
                            "id": "bc065342-c27f-4a01-931a-0721efbd0543",
                            "title": "618af84be4c4cd2453056355 Simply Positive",
                            "filename_disk": "bc065342-c27f-4a01-931a-0721efbd0543.pdf",
                            "__typename": "directus_files"
                        },
                        "__typename": "past_winners_worksheets"
                    },
                    "__typename": "past_winners_past_winners_worksheets"
                }
            ],
            "categories": [
                {
                    "id": "7",
                    "past_winners_category": {
                        "id": "1",
                        "category": "Junior",
                        "__typename": "past_winners_categories"
                    },
                    "__typename": "past_winners_past_winners_categories"
                },
                {
                    "id": "123",
                    "past_winners_category": {
                        "id": "16",
                        "category": "Social Impact Award",
                        "__typename": "past_winners_categories"
                    },
                    "__typename": "past_winners_past_winners_categories"
                }
            ],
            "__typename": "past_winners"
        },
        {
            "id": "6",
            "name": "Undercover",
            "image": {
                "id": "e8cfabd5-5fea-424e-951f-96c30ba3565f",
                "filename_disk": "e8cfabd5-5fea-424e-951f-96c30ba3565f.jpg",
                "description": null,
                "svg_code": null,
                "__typename": "directus_files"
            },
            "short_description": "A multipurpose, flexible reusable drink cover.",
            "year": [
                {
                    "id": "8",
                    "past_winners_year": {
                        "id": "1",
                        "year": 2021,
                        "__typename": "past_winners_years"
                    },
                    "__typename": "past_winners_past_winners_years"
                }
            ],
            "school_name": "Aquinas College",
            "students_name": "Alexandra Taylor, Maggie Blackmore, Hannah Brooks, Lilly Hosking",
            "youtube_video_id": "HXtyPpawxNg",
            "project_information": null,
            "worksheets": [
                {
                    "id": "5",
                    "past_winners_worksheet": {
                        "id": "5",
                        "worksheet": {
                            "id": "93848eb1-a611-41fd-a067-91b9c84062cd",
                            "title": "618af2a0019d214a5d3912b2 Undercover 1",
                            "filename_disk": "93848eb1-a611-41fd-a067-91b9c84062cd.pdf",
                            "__typename": "directus_files"
                        },
                        "__typename": "past_winners_worksheets"
                    },
                    "__typename": "past_winners_past_winners_worksheets"
                }
            ],
            "categories": [
                {
                    "id": "8",
                    "past_winners_category": {
                        "id": "3",
                        "category": "Senior",
                        "__typename": "past_winners_categories"
                    },
                    "__typename": "past_winners_past_winners_categories"
                }
            ],
            "__typename": "past_winners"
        }
    ],
    "brands": [
        {
            "id": "2",
            "image": {
                "id": "78cc9fd0-ca35-4dc4-ba58-50c13d984f01",
                "description": null,
                "filename_disk": "78cc9fd0-ca35-4dc4-ba58-50c13d984f01.png",
                "svg_code": null,
                "__typename": "directus_files"
            },
            "__typename": "brands"
        },
        {
            "id": "1",
            "image": {
                "id": "a1e45bc8-cbd3-4df1-bbaa-709bba362345",
                "description": null,
                "filename_disk": "a1e45bc8-cbd3-4df1-bbaa-709bba362345.png",
                "svg_code": null,
                "__typename": "directus_files"
            },
            "__typename": "brands"
        },
        {
            "id": "5",
            "image": {
                "id": "32e15ed0-dde4-4ae5-90d3-62a4c6d6434a",
                "description": null,
                "filename_disk": "32e15ed0-dde4-4ae5-90d3-62a4c6d6434a.png",
                "svg_code": null,
                "__typename": "directus_files"
            },
            "__typename": "brands"
        },
        {
            "id": "3",
            "image": {
                "id": "8eac32f6-6389-4b9c-8c76-13fd574af184",
                "description": null,
                "filename_disk": "8eac32f6-6389-4b9c-8c76-13fd574af184.png",
                "svg_code": null,
                "__typename": "directus_files"
            },
            "__typename": "brands"
        },
        {
            "id": "4",
            "image": {
                "id": "8c30424c-7043-4968-b7e3-e64775879f91",
                "description": null,
                "filename_disk": "8c30424c-7043-4968-b7e3-e64775879f91.png",
                "svg_code": null,
                "__typename": "directus_files"
            },
            "__typename": "brands"
        }
    ]
}}),
            },
        }
    }
</script>

<script type="ts">
    import { query } from '@urql/svelte'
    import Divider from 'components/divider.svelte'
    import CompetitionIntro from 'modules/competitions/intros/home.svelte'
    import InnovatorsIntro from 'modules/innovators/intro.svelte'
    import HorizontalLine from 'components/horizontal-line.svelte'
    import ArticleIntro from 'modules/inspiration/home/intro.svelte'
    import { replaceQueryParams } from 'helpers/url'
    import { onMount } from 'svelte'
    import { getPastWinnersFilterQuery } from 'helpers/graphql-query'
    import PastWinners from 'modules/past-winners/index.svelte'
    import Brands from 'modules/brands/home.svelte'
    import uniqBy from 'lodash/uniqBy.js'
import { writable } from 'svelte/store';
    export let homePage: HomePageQueryStore

    // query(homePage)

    export let currentPage: number
    export let limit: number
    export let category: string = 'all'

    let selectedPastWinnersCategoryId: string
    let pastWinnersList: HomePageQuery['past_winners']
    let page = currentPage

    $: noMorePastWinnersToLoad = pastWinnersList?.length === (homePage.data?.past_winners_aggregated ?? [])[0]?.count?.id

    onMount(() => {
        selectedPastWinnersCategoryId = category ?? 'all'
    })

    $: if (!$homePage.fetching) {
        pastWinnersList = uniqBy([...(pastWinnersList ?? []), ...($homePage.data?.past_winners ?? [])], 'id')
    }

    const loadMorePastWinners = () => {
        ++page
        replaceQueryParams({
            page: page.toString(),
        })

        $homePage.variables = { ...$homePage.variables, page, limit }
    }

    const onCategoryClick = (id: string) => {
        selectedPastWinnersCategoryId = id
        pastWinnersList = []
        page = 1
        replaceQueryParams({
            category: id,
            page: page.toString(),
        })

        $homePage.variables = { ...$homePage.variables, page, limit, filterQuery: getPastWinnersFilterQuery(id) }
    }
</script>

<svelte:head>
    <title>{$homePage.data?.home_page?.title_bar_text ?? 'YiA'}</title>
    <meta name="description" content={$homePage.data?.home_page?.meta_description ?? ''} />
</svelte:head>

{#if $homePage.data}
    <CompetitionIntro data={$homePage.data.home_page} />
    <Divider heightDesktop={8.5} heightMobile={5.1} />
    <InnovatorsIntro data={$homePage.data.home_page} />
    <Divider heightDesktop={16.2} heightMobile={5} />
    <HorizontalLine />
    <Divider heightDesktop={11.5} heightMobile={5.6} />
    <ArticleIntro data={$homePage.data.home_page} />
    <Divider heightDesktop={7.6} heightMobile={5.6} />
    <HorizontalLine />
    <Divider heightDesktop={14.2} heightMobile={5.6} />
    <PastWinners
        selectedCategoryId={selectedPastWinnersCategoryId}
        data={$homePage.data}
        {pastWinnersList}
        onLoadMoreClick={noMorePastWinnersToLoad ? undefined : loadMorePastWinners}
        {onCategoryClick}
    />
    <Divider heightDesktop={14.4} heightMobile={5.6} />
    <HorizontalLine />
    <Divider heightDesktop={18.2} heightMobile={5} />
    <Brands data={$homePage.data} />
    <Divider heightDesktop={20.9} heightMobile={5.64} />
{/if}
