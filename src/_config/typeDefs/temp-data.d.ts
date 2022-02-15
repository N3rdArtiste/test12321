interface Content {
    level_1_title: string
    level_2_title: string
    level_2_subtext: string
    level_3_text: string
    level_3_links: string[]
}

interface DataBody {
    multi_level_question_items: Content
}

interface DataPayload {
    about_page: {
        multi_level_questions:
            | {
                  question: {
                      title: string
                      body: DataBody[]
                  }
              }[]
            | SomeObject[]
    }
}
