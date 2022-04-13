
 type Maybe<T> = T | null;
 type InputMaybe<T> = Maybe<T>;
 type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
 type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
 type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
 type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** ISO8601 Date values */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

 type Query = {
  __typename?: 'Query';
  about_page?: Maybe<About_Page>;
  about_page_judges_1?: Maybe<Array<Maybe<About_Page_Judges_1>>>;
  about_page_judges_1_aggregated?: Maybe<Array<Maybe<About_Page_Judges_1_Aggregated>>>;
  about_page_judges_1_by_id?: Maybe<About_Page_Judges_1>;
  about_page_question_text_area?: Maybe<Array<Maybe<About_Page_Question_Text_Area>>>;
  about_page_question_text_area_aggregated?: Maybe<Array<Maybe<About_Page_Question_Text_Area_Aggregated>>>;
  about_page_question_text_area_by_id?: Maybe<About_Page_Question_Text_Area>;
  about_page_question_titles?: Maybe<Array<Maybe<About_Page_Question_Titles>>>;
  about_page_question_titles_aggregated?: Maybe<Array<Maybe<About_Page_Question_Titles_Aggregated>>>;
  about_page_question_titles_by_id?: Maybe<About_Page_Question_Titles>;
  brands?: Maybe<Array<Maybe<Brands>>>;
  brands_aggregated?: Maybe<Array<Maybe<Brands_Aggregated>>>;
  brands_by_id?: Maybe<Brands>;
  enter_page?: Maybe<Enter_Page>;
  enter_page_key_dates?: Maybe<Array<Maybe<Enter_Page_Key_Dates>>>;
  enter_page_key_dates_aggregated?: Maybe<Array<Maybe<Enter_Page_Key_Dates_Aggregated>>>;
  enter_page_key_dates_by_id?: Maybe<Enter_Page_Key_Dates>;
  enter_page_question_text_area?: Maybe<Array<Maybe<Enter_Page_Question_Text_Area>>>;
  enter_page_question_text_area_aggregated?: Maybe<Array<Maybe<Enter_Page_Question_Text_Area_Aggregated>>>;
  enter_page_question_text_area_by_id?: Maybe<Enter_Page_Question_Text_Area>;
  enter_page_question_titles?: Maybe<Array<Maybe<Enter_Page_Question_Titles>>>;
  enter_page_question_titles_aggregated?: Maybe<Array<Maybe<Enter_Page_Question_Titles_Aggregated>>>;
  enter_page_question_titles_by_id?: Maybe<Enter_Page_Question_Titles>;
  finalist_page?: Maybe<Finalist_Page>;
  footer?: Maybe<Footer>;
  header?: Maybe<Header>;
  home_page?: Maybe<Home_Page>;
  home_page_inspiration_articles?: Maybe<Array<Maybe<Home_Page_Inspiration_Articles>>>;
  home_page_inspiration_articles_aggregated?: Maybe<Array<Maybe<Home_Page_Inspiration_Articles_Aggregated>>>;
  home_page_inspiration_articles_by_id?: Maybe<Home_Page_Inspiration_Articles>;
  inspiration_articles?: Maybe<Array<Maybe<Inspiration_Articles>>>;
  inspiration_articles_aggregated?: Maybe<Array<Maybe<Inspiration_Articles_Aggregated>>>;
  inspiration_articles_by_id?: Maybe<Inspiration_Articles>;
  inspiration_page?: Maybe<Inspiration_Page>;
  judges?: Maybe<Array<Maybe<Judges>>>;
  judges_aggregated?: Maybe<Array<Maybe<Judges_Aggregated>>>;
  judges_by_id?: Maybe<Judges>;
  judges_judges_years?: Maybe<Array<Maybe<Judges_Judges_Years>>>;
  judges_judges_years_aggregated?: Maybe<Array<Maybe<Judges_Judges_Years_Aggregated>>>;
  judges_judges_years_by_id?: Maybe<Judges_Judges_Years>;
  judges_page?: Maybe<Judges_Page>;
  judges_years?: Maybe<Array<Maybe<Judges_Years>>>;
  judges_years_aggregated?: Maybe<Array<Maybe<Judges_Years_Aggregated>>>;
  judges_years_by_id?: Maybe<Judges_Years>;
  key_dates?: Maybe<Array<Maybe<Key_Dates>>>;
  key_dates_aggregated?: Maybe<Array<Maybe<Key_Dates_Aggregated>>>;
  key_dates_by_id?: Maybe<Key_Dates>;
  multi_level_question_item_links?: Maybe<Array<Maybe<Multi_Level_Question_Item_Links>>>;
  multi_level_question_item_links_aggregated?: Maybe<Array<Maybe<Multi_Level_Question_Item_Links_Aggregated>>>;
  multi_level_question_item_links_by_id?: Maybe<Multi_Level_Question_Item_Links>;
  multi_level_question_items?: Maybe<Array<Maybe<Multi_Level_Question_Items>>>;
  multi_level_question_items_aggregated?: Maybe<Array<Maybe<Multi_Level_Question_Items_Aggregated>>>;
  multi_level_question_items_by_id?: Maybe<Multi_Level_Question_Items>;
  multi_level_question_items_multi_level_question_item_links?: Maybe<Array<Maybe<Multi_Level_Question_Items_Multi_Level_Question_Item_Links>>>;
  multi_level_question_items_multi_level_question_item_links_aggregated?: Maybe<Array<Maybe<Multi_Level_Question_Items_Multi_Level_Question_Item_Links_Aggregated>>>;
  multi_level_question_items_multi_level_question_item_links_by_id?: Maybe<Multi_Level_Question_Items_Multi_Level_Question_Item_Links>;
  our_sponsors?: Maybe<Array<Maybe<Our_Sponsors>>>;
  our_sponsors_aggregated?: Maybe<Array<Maybe<Our_Sponsors_Aggregated>>>;
  our_sponsors_by_id?: Maybe<Our_Sponsors>;
  partners?: Maybe<Array<Maybe<Partners>>>;
  partners_aggregated?: Maybe<Array<Maybe<Partners_Aggregated>>>;
  partners_by_id?: Maybe<Partners>;
  past_winners?: Maybe<Array<Maybe<Past_Winners>>>;
  past_winners_aggregated?: Maybe<Array<Maybe<Past_Winners_Aggregated>>>;
  past_winners_by_id?: Maybe<Past_Winners>;
  past_winners_categories?: Maybe<Array<Maybe<Past_Winners_Categories>>>;
  past_winners_categories_aggregated?: Maybe<Array<Maybe<Past_Winners_Categories_Aggregated>>>;
  past_winners_categories_by_id?: Maybe<Past_Winners_Categories>;
  past_winners_page?: Maybe<Past_Winners_Page>;
  past_winners_past_winners_categories?: Maybe<Array<Maybe<Past_Winners_Past_Winners_Categories>>>;
  past_winners_past_winners_categories_aggregated?: Maybe<Array<Maybe<Past_Winners_Past_Winners_Categories_Aggregated>>>;
  past_winners_past_winners_categories_by_id?: Maybe<Past_Winners_Past_Winners_Categories>;
  past_winners_past_winners_worksheets?: Maybe<Array<Maybe<Past_Winners_Past_Winners_Worksheets>>>;
  past_winners_past_winners_worksheets_aggregated?: Maybe<Array<Maybe<Past_Winners_Past_Winners_Worksheets_Aggregated>>>;
  past_winners_past_winners_worksheets_by_id?: Maybe<Past_Winners_Past_Winners_Worksheets>;
  past_winners_past_winners_years?: Maybe<Array<Maybe<Past_Winners_Past_Winners_Years>>>;
  past_winners_past_winners_years_aggregated?: Maybe<Array<Maybe<Past_Winners_Past_Winners_Years_Aggregated>>>;
  past_winners_past_winners_years_by_id?: Maybe<Past_Winners_Past_Winners_Years>;
  past_winners_worksheets?: Maybe<Array<Maybe<Past_Winners_Worksheets>>>;
  past_winners_worksheets_aggregated?: Maybe<Array<Maybe<Past_Winners_Worksheets_Aggregated>>>;
  past_winners_worksheets_by_id?: Maybe<Past_Winners_Worksheets>;
  past_winners_years?: Maybe<Array<Maybe<Past_Winners_Years>>>;
  past_winners_years_aggregated?: Maybe<Array<Maybe<Past_Winners_Years_Aggregated>>>;
  past_winners_years_by_id?: Maybe<Past_Winners_Years>;
  question_text_area?: Maybe<Array<Maybe<Question_Text_Area>>>;
  question_text_area_aggregated?: Maybe<Array<Maybe<Question_Text_Area_Aggregated>>>;
  question_text_area_by_id?: Maybe<Question_Text_Area>;
  question_titles?: Maybe<Array<Maybe<Question_Titles>>>;
  question_titles_aggregated?: Maybe<Array<Maybe<Question_Titles_Aggregated>>>;
  question_titles_by_id?: Maybe<Question_Titles>;
  question_titles_multi_level_question_items?: Maybe<Array<Maybe<Question_Titles_Multi_Level_Question_Items>>>;
  question_titles_multi_level_question_items_aggregated?: Maybe<Array<Maybe<Question_Titles_Multi_Level_Question_Items_Aggregated>>>;
  question_titles_multi_level_question_items_by_id?: Maybe<Question_Titles_Multi_Level_Question_Items>;
  social_media_links?: Maybe<Array<Maybe<Social_Media_Links>>>;
  social_media_links_aggregated?: Maybe<Array<Maybe<Social_Media_Links_Aggregated>>>;
  social_media_links_by_id?: Maybe<Social_Media_Links>;
};


 type QueryAbout_Page_Judges_1Args = {
  filter?: InputMaybe<About_Page_Judges_1_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryAbout_Page_Judges_1_AggregatedArgs = {
  filter?: InputMaybe<About_Page_Judges_1_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryAbout_Page_Judges_1_By_IdArgs = {
  id: Scalars['ID'];
};


 type QueryAbout_Page_Question_Text_AreaArgs = {
  filter?: InputMaybe<About_Page_Question_Text_Area_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryAbout_Page_Question_Text_Area_AggregatedArgs = {
  filter?: InputMaybe<About_Page_Question_Text_Area_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryAbout_Page_Question_Text_Area_By_IdArgs = {
  id: Scalars['ID'];
};


 type QueryAbout_Page_Question_TitlesArgs = {
  filter?: InputMaybe<About_Page_Question_Titles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryAbout_Page_Question_Titles_AggregatedArgs = {
  filter?: InputMaybe<About_Page_Question_Titles_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryAbout_Page_Question_Titles_By_IdArgs = {
  id: Scalars['ID'];
};


 type QueryBrandsArgs = {
  filter?: InputMaybe<Brands_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryBrands_AggregatedArgs = {
  filter?: InputMaybe<Brands_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryBrands_By_IdArgs = {
  id: Scalars['ID'];
};


 type QueryEnter_Page_Key_DatesArgs = {
  filter?: InputMaybe<Enter_Page_Key_Dates_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryEnter_Page_Key_Dates_AggregatedArgs = {
  filter?: InputMaybe<Enter_Page_Key_Dates_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryEnter_Page_Key_Dates_By_IdArgs = {
  id: Scalars['ID'];
};


 type QueryEnter_Page_Question_Text_AreaArgs = {
  filter?: InputMaybe<Enter_Page_Question_Text_Area_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryEnter_Page_Question_Text_Area_AggregatedArgs = {
  filter?: InputMaybe<Enter_Page_Question_Text_Area_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryEnter_Page_Question_Text_Area_By_IdArgs = {
  id: Scalars['ID'];
};


 type QueryEnter_Page_Question_TitlesArgs = {
  filter?: InputMaybe<Enter_Page_Question_Titles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryEnter_Page_Question_Titles_AggregatedArgs = {
  filter?: InputMaybe<Enter_Page_Question_Titles_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryEnter_Page_Question_Titles_By_IdArgs = {
  id: Scalars['ID'];
};


 type QueryHome_Page_Inspiration_ArticlesArgs = {
  filter?: InputMaybe<Home_Page_Inspiration_Articles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryHome_Page_Inspiration_Articles_AggregatedArgs = {
  filter?: InputMaybe<Home_Page_Inspiration_Articles_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryHome_Page_Inspiration_Articles_By_IdArgs = {
  id: Scalars['ID'];
};


 type QueryInspiration_ArticlesArgs = {
  filter?: InputMaybe<Inspiration_Articles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryInspiration_Articles_AggregatedArgs = {
  filter?: InputMaybe<Inspiration_Articles_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryInspiration_Articles_By_IdArgs = {
  id: Scalars['ID'];
};


 type QueryJudgesArgs = {
  filter?: InputMaybe<Judges_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryJudges_AggregatedArgs = {
  filter?: InputMaybe<Judges_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryJudges_By_IdArgs = {
  id: Scalars['ID'];
};


 type QueryJudges_Judges_YearsArgs = {
  filter?: InputMaybe<Judges_Judges_Years_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryJudges_Judges_Years_AggregatedArgs = {
  filter?: InputMaybe<Judges_Judges_Years_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryJudges_Judges_Years_By_IdArgs = {
  id: Scalars['ID'];
};


 type QueryJudges_YearsArgs = {
  filter?: InputMaybe<Judges_Years_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryJudges_Years_AggregatedArgs = {
  filter?: InputMaybe<Judges_Years_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryJudges_Years_By_IdArgs = {
  id: Scalars['ID'];
};


 type QueryKey_DatesArgs = {
  filter?: InputMaybe<Key_Dates_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryKey_Dates_AggregatedArgs = {
  filter?: InputMaybe<Key_Dates_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryKey_Dates_By_IdArgs = {
  id: Scalars['ID'];
};


 type QueryMulti_Level_Question_Item_LinksArgs = {
  filter?: InputMaybe<Multi_Level_Question_Item_Links_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryMulti_Level_Question_Item_Links_AggregatedArgs = {
  filter?: InputMaybe<Multi_Level_Question_Item_Links_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryMulti_Level_Question_Item_Links_By_IdArgs = {
  id: Scalars['ID'];
};


 type QueryMulti_Level_Question_ItemsArgs = {
  filter?: InputMaybe<Multi_Level_Question_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryMulti_Level_Question_Items_AggregatedArgs = {
  filter?: InputMaybe<Multi_Level_Question_Items_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryMulti_Level_Question_Items_By_IdArgs = {
  id: Scalars['ID'];
};


 type QueryMulti_Level_Question_Items_Multi_Level_Question_Item_LinksArgs = {
  filter?: InputMaybe<Multi_Level_Question_Items_Multi_Level_Question_Item_Links_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryMulti_Level_Question_Items_Multi_Level_Question_Item_Links_AggregatedArgs = {
  filter?: InputMaybe<Multi_Level_Question_Items_Multi_Level_Question_Item_Links_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryMulti_Level_Question_Items_Multi_Level_Question_Item_Links_By_IdArgs = {
  id: Scalars['ID'];
};


 type QueryOur_SponsorsArgs = {
  filter?: InputMaybe<Our_Sponsors_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryOur_Sponsors_AggregatedArgs = {
  filter?: InputMaybe<Our_Sponsors_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryOur_Sponsors_By_IdArgs = {
  id: Scalars['ID'];
};


 type QueryPartnersArgs = {
  filter?: InputMaybe<Partners_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryPartners_AggregatedArgs = {
  filter?: InputMaybe<Partners_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryPartners_By_IdArgs = {
  id: Scalars['ID'];
};


 type QueryPast_WinnersArgs = {
  filter?: InputMaybe<Past_Winners_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryPast_Winners_AggregatedArgs = {
  filter?: InputMaybe<Past_Winners_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryPast_Winners_By_IdArgs = {
  id: Scalars['ID'];
};


 type QueryPast_Winners_CategoriesArgs = {
  filter?: InputMaybe<Past_Winners_Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryPast_Winners_Categories_AggregatedArgs = {
  filter?: InputMaybe<Past_Winners_Categories_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryPast_Winners_Categories_By_IdArgs = {
  id: Scalars['ID'];
};


 type QueryPast_Winners_Past_Winners_CategoriesArgs = {
  filter?: InputMaybe<Past_Winners_Past_Winners_Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryPast_Winners_Past_Winners_Categories_AggregatedArgs = {
  filter?: InputMaybe<Past_Winners_Past_Winners_Categories_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryPast_Winners_Past_Winners_Categories_By_IdArgs = {
  id: Scalars['ID'];
};


 type QueryPast_Winners_Past_Winners_WorksheetsArgs = {
  filter?: InputMaybe<Past_Winners_Past_Winners_Worksheets_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryPast_Winners_Past_Winners_Worksheets_AggregatedArgs = {
  filter?: InputMaybe<Past_Winners_Past_Winners_Worksheets_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryPast_Winners_Past_Winners_Worksheets_By_IdArgs = {
  id: Scalars['ID'];
};


 type QueryPast_Winners_Past_Winners_YearsArgs = {
  filter?: InputMaybe<Past_Winners_Past_Winners_Years_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryPast_Winners_Past_Winners_Years_AggregatedArgs = {
  filter?: InputMaybe<Past_Winners_Past_Winners_Years_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryPast_Winners_Past_Winners_Years_By_IdArgs = {
  id: Scalars['ID'];
};


 type QueryPast_Winners_WorksheetsArgs = {
  filter?: InputMaybe<Past_Winners_Worksheets_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryPast_Winners_Worksheets_AggregatedArgs = {
  filter?: InputMaybe<Past_Winners_Worksheets_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryPast_Winners_Worksheets_By_IdArgs = {
  id: Scalars['ID'];
};


 type QueryPast_Winners_YearsArgs = {
  filter?: InputMaybe<Past_Winners_Years_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryPast_Winners_Years_AggregatedArgs = {
  filter?: InputMaybe<Past_Winners_Years_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryPast_Winners_Years_By_IdArgs = {
  id: Scalars['ID'];
};


 type QueryQuestion_Text_AreaArgs = {
  filter?: InputMaybe<Question_Text_Area_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryQuestion_Text_Area_AggregatedArgs = {
  filter?: InputMaybe<Question_Text_Area_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryQuestion_Text_Area_By_IdArgs = {
  id: Scalars['ID'];
};


 type QueryQuestion_TitlesArgs = {
  filter?: InputMaybe<Question_Titles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryQuestion_Titles_AggregatedArgs = {
  filter?: InputMaybe<Question_Titles_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryQuestion_Titles_By_IdArgs = {
  id: Scalars['ID'];
};


 type QueryQuestion_Titles_Multi_Level_Question_ItemsArgs = {
  filter?: InputMaybe<Question_Titles_Multi_Level_Question_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryQuestion_Titles_Multi_Level_Question_Items_AggregatedArgs = {
  filter?: InputMaybe<Question_Titles_Multi_Level_Question_Items_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QueryQuestion_Titles_Multi_Level_Question_Items_By_IdArgs = {
  id: Scalars['ID'];
};


 type QuerySocial_Media_LinksArgs = {
  filter?: InputMaybe<Social_Media_Links_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QuerySocial_Media_Links_AggregatedArgs = {
  filter?: InputMaybe<Social_Media_Links_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type QuerySocial_Media_Links_By_IdArgs = {
  id: Scalars['ID'];
};

 type About_Page = {
  __typename?: 'about_page';
  brands_section_text?: Maybe<Scalars['String']>;
  challenge_section_body?: Maybe<Scalars['String']>;
  challenge_section_heading?: Maybe<Scalars['String']>;
  challenge_section_video?: Maybe<Directus_Files>;
  challenge_section_youtube_video_id?: Maybe<Scalars['String']>;
  enter_now_section_CTA_label?: Maybe<Scalars['String']>;
  enter_now_section_image?: Maybe<Directus_Files>;
  heading?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  judges_section_CTA_label?: Maybe<Scalars['String']>;
  judges_section_body?: Maybe<Scalars['String']>;
  judges_section_heading?: Maybe<Scalars['String']>;
  judges_section_judge?: Maybe<Array<Maybe<About_Page_Judges_1>>>;
  meta_description?: Maybe<Scalars['String']>;
  multi_level_questions?: Maybe<Array<Maybe<About_Page_Question_Titles>>>;
  textarea_questions?: Maybe<Array<Maybe<About_Page_Question_Text_Area>>>;
  title_bar_text?: Maybe<Scalars['String']>;
};


 type About_PageChallenge_Section_VideoArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type About_PageEnter_Now_Section_ImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type About_PageJudges_Section_JudgeArgs = {
  filter?: InputMaybe<About_Page_Judges_1_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type About_PageMulti_Level_QuestionsArgs = {
  filter?: InputMaybe<About_Page_Question_Titles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type About_PageTextarea_QuestionsArgs = {
  filter?: InputMaybe<About_Page_Question_Text_Area_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

 type About_Page_Filter = {
  _and?: InputMaybe<Array<InputMaybe<About_Page_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<About_Page_Filter>>>;
  brands_section_text?: InputMaybe<String_Filter_Operators>;
  challenge_section_body?: InputMaybe<String_Filter_Operators>;
  challenge_section_heading?: InputMaybe<String_Filter_Operators>;
  challenge_section_video?: InputMaybe<Directus_Files_Filter>;
  challenge_section_youtube_video_id?: InputMaybe<String_Filter_Operators>;
  enter_now_section_CTA_label?: InputMaybe<String_Filter_Operators>;
  enter_now_section_image?: InputMaybe<Directus_Files_Filter>;
  heading?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  judges_section_CTA_label?: InputMaybe<String_Filter_Operators>;
  judges_section_body?: InputMaybe<String_Filter_Operators>;
  judges_section_heading?: InputMaybe<String_Filter_Operators>;
  judges_section_judge?: InputMaybe<About_Page_Judges_1_Filter>;
  meta_description?: InputMaybe<String_Filter_Operators>;
  multi_level_questions?: InputMaybe<About_Page_Question_Titles_Filter>;
  textarea_questions?: InputMaybe<About_Page_Question_Text_Area_Filter>;
  title_bar_text?: InputMaybe<String_Filter_Operators>;
};

 type About_Page_Judges_1 = {
  __typename?: 'about_page_judges_1';
  about_page_id?: Maybe<About_Page>;
  id?: Maybe<Scalars['ID']>;
  judge?: Maybe<Judges>;
};


 type About_Page_Judges_1About_Page_IdArgs = {
  filter?: InputMaybe<About_Page_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type About_Page_Judges_1JudgeArgs = {
  filter?: InputMaybe<Judges_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

 type About_Page_Judges_1_Aggregated = {
  __typename?: 'about_page_judges_1_aggregated';
  avg?: Maybe<About_Page_Judges_1_Aggregated_Fields>;
  avgDistinct?: Maybe<About_Page_Judges_1_Aggregated_Fields>;
  count?: Maybe<About_Page_Judges_1_Aggregated_Fields>;
  countDistinct?: Maybe<About_Page_Judges_1_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<About_Page_Judges_1_Aggregated_Fields>;
  min?: Maybe<About_Page_Judges_1_Aggregated_Fields>;
  sum?: Maybe<About_Page_Judges_1_Aggregated_Fields>;
  sumDistinct?: Maybe<About_Page_Judges_1_Aggregated_Fields>;
};

 type About_Page_Judges_1_Aggregated_Fields = {
  __typename?: 'about_page_judges_1_aggregated_fields';
  about_page_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  judge?: Maybe<Scalars['Float']>;
};

 type About_Page_Judges_1_Filter = {
  _and?: InputMaybe<Array<InputMaybe<About_Page_Judges_1_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<About_Page_Judges_1_Filter>>>;
  about_page_id?: InputMaybe<About_Page_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  judge?: InputMaybe<Judges_Filter>;
};

 type About_Page_Question_Text_Area = {
  __typename?: 'about_page_question_text_area';
  about_page?: Maybe<About_Page>;
  id?: Maybe<Scalars['ID']>;
  question?: Maybe<Question_Text_Area>;
};


 type About_Page_Question_Text_AreaAbout_PageArgs = {
  filter?: InputMaybe<About_Page_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type About_Page_Question_Text_AreaQuestionArgs = {
  filter?: InputMaybe<Question_Text_Area_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

 type About_Page_Question_Text_Area_Aggregated = {
  __typename?: 'about_page_question_text_area_aggregated';
  avg?: Maybe<About_Page_Question_Text_Area_Aggregated_Fields>;
  avgDistinct?: Maybe<About_Page_Question_Text_Area_Aggregated_Fields>;
  count?: Maybe<About_Page_Question_Text_Area_Aggregated_Fields>;
  countDistinct?: Maybe<About_Page_Question_Text_Area_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<About_Page_Question_Text_Area_Aggregated_Fields>;
  min?: Maybe<About_Page_Question_Text_Area_Aggregated_Fields>;
  sum?: Maybe<About_Page_Question_Text_Area_Aggregated_Fields>;
  sumDistinct?: Maybe<About_Page_Question_Text_Area_Aggregated_Fields>;
};

 type About_Page_Question_Text_Area_Aggregated_Fields = {
  __typename?: 'about_page_question_text_area_aggregated_fields';
  about_page?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  question?: Maybe<Scalars['Float']>;
};

 type About_Page_Question_Text_Area_Filter = {
  _and?: InputMaybe<Array<InputMaybe<About_Page_Question_Text_Area_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<About_Page_Question_Text_Area_Filter>>>;
  about_page?: InputMaybe<About_Page_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  question?: InputMaybe<Question_Text_Area_Filter>;
};

 type About_Page_Question_Titles = {
  __typename?: 'about_page_question_titles';
  about_page?: Maybe<About_Page>;
  id?: Maybe<Scalars['ID']>;
  question?: Maybe<Question_Titles>;
};


 type About_Page_Question_TitlesAbout_PageArgs = {
  filter?: InputMaybe<About_Page_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type About_Page_Question_TitlesQuestionArgs = {
  filter?: InputMaybe<Question_Titles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

 type About_Page_Question_Titles_Aggregated = {
  __typename?: 'about_page_question_titles_aggregated';
  avg?: Maybe<About_Page_Question_Titles_Aggregated_Fields>;
  avgDistinct?: Maybe<About_Page_Question_Titles_Aggregated_Fields>;
  count?: Maybe<About_Page_Question_Titles_Aggregated_Fields>;
  countDistinct?: Maybe<About_Page_Question_Titles_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<About_Page_Question_Titles_Aggregated_Fields>;
  min?: Maybe<About_Page_Question_Titles_Aggregated_Fields>;
  sum?: Maybe<About_Page_Question_Titles_Aggregated_Fields>;
  sumDistinct?: Maybe<About_Page_Question_Titles_Aggregated_Fields>;
};

 type About_Page_Question_Titles_Aggregated_Fields = {
  __typename?: 'about_page_question_titles_aggregated_fields';
  about_page?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  question?: Maybe<Scalars['Float']>;
};

 type About_Page_Question_Titles_Filter = {
  _and?: InputMaybe<Array<InputMaybe<About_Page_Question_Titles_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<About_Page_Question_Titles_Filter>>>;
  about_page?: InputMaybe<About_Page_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  question?: InputMaybe<Question_Titles_Filter>;
};

 type Boolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

 type Brands = {
  __typename?: 'brands';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Directus_Files>;
  sort?: Maybe<Scalars['Int']>;
};


 type BrandsImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

 type Brands_Aggregated = {
  __typename?: 'brands_aggregated';
  avg?: Maybe<Brands_Aggregated_Fields>;
  avgDistinct?: Maybe<Brands_Aggregated_Fields>;
  count?: Maybe<Brands_Aggregated_Fields>;
  countDistinct?: Maybe<Brands_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Brands_Aggregated_Fields>;
  min?: Maybe<Brands_Aggregated_Fields>;
  sum?: Maybe<Brands_Aggregated_Fields>;
  sumDistinct?: Maybe<Brands_Aggregated_Fields>;
};

 type Brands_Aggregated_Fields = {
  __typename?: 'brands_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

 type Brands_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Brands_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Brands_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

 type Date_Filter_Operators = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

 type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

 type Datetime_Functions = {
  __typename?: 'datetime_functions';
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  weekday?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

 type Directus_Files = {
  __typename?: 'directus_files';
  charset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  embed?: Maybe<Scalars['String']>;
  filename_disk?: Maybe<Scalars['String']>;
  filename_download: Scalars['String'];
  filesize?: Maybe<Scalars['Int']>;
  folder?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  location?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  modified_by?: Maybe<Scalars['String']>;
  modified_on: Scalars['Date'];
  modified_on_func?: Maybe<Datetime_Functions>;
  storage: Scalars['String'];
  svg_code?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uploaded_by?: Maybe<Scalars['String']>;
  uploaded_on: Scalars['Date'];
  uploaded_on_func?: Maybe<Datetime_Functions>;
  width?: Maybe<Scalars['Int']>;
};

 type Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  charset?: InputMaybe<String_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  duration?: InputMaybe<Number_Filter_Operators>;
  embed?: InputMaybe<String_Filter_Operators>;
  filename_disk?: InputMaybe<String_Filter_Operators>;
  filename_download?: InputMaybe<String_Filter_Operators>;
  filesize?: InputMaybe<Number_Filter_Operators>;
  folder?: InputMaybe<String_Filter_Operators>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  metadata?: InputMaybe<String_Filter_Operators>;
  modified_by?: InputMaybe<String_Filter_Operators>;
  modified_on?: InputMaybe<Date_Filter_Operators>;
  modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  storage?: InputMaybe<String_Filter_Operators>;
  svg_code?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  uploaded_by?: InputMaybe<String_Filter_Operators>;
  uploaded_on?: InputMaybe<Date_Filter_Operators>;
  uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  width?: InputMaybe<Number_Filter_Operators>;
};

 type Enter_Page = {
  __typename?: 'enter_page';
  heading?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  key_dates?: Maybe<Array<Maybe<Enter_Page_Key_Dates>>>;
  key_dates_title?: Maybe<Scalars['String']>;
  key_dates_video?: Maybe<Directus_Files>;
  key_dates_youtube_video_id?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  multi_level_questions?: Maybe<Array<Maybe<Enter_Page_Question_Titles>>>;
  text_area_questions?: Maybe<Array<Maybe<Enter_Page_Question_Text_Area>>>;
  timeline_section_heading?: Maybe<Scalars['String']>;
  timeline_section_image?: Maybe<Directus_Files>;
  title_bar_text?: Maybe<Scalars['String']>;
};


 type Enter_PageKey_DatesArgs = {
  filter?: InputMaybe<Enter_Page_Key_Dates_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type Enter_PageKey_Dates_VideoArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type Enter_PageMulti_Level_QuestionsArgs = {
  filter?: InputMaybe<Enter_Page_Question_Titles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type Enter_PageText_Area_QuestionsArgs = {
  filter?: InputMaybe<Enter_Page_Question_Text_Area_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type Enter_PageTimeline_Section_ImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

 type Enter_Page_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Enter_Page_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Enter_Page_Filter>>>;
  heading?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  key_dates?: InputMaybe<Enter_Page_Key_Dates_Filter>;
  key_dates_title?: InputMaybe<String_Filter_Operators>;
  key_dates_video?: InputMaybe<Directus_Files_Filter>;
  key_dates_youtube_video_id?: InputMaybe<String_Filter_Operators>;
  meta_description?: InputMaybe<String_Filter_Operators>;
  multi_level_questions?: InputMaybe<Enter_Page_Question_Titles_Filter>;
  text_area_questions?: InputMaybe<Enter_Page_Question_Text_Area_Filter>;
  timeline_section_heading?: InputMaybe<String_Filter_Operators>;
  timeline_section_image?: InputMaybe<Directus_Files_Filter>;
  title_bar_text?: InputMaybe<String_Filter_Operators>;
};

 type Enter_Page_Key_Dates = {
  __typename?: 'enter_page_key_dates';
  dates?: Maybe<Key_Dates>;
  enter_page?: Maybe<Enter_Page>;
  id?: Maybe<Scalars['ID']>;
};


 type Enter_Page_Key_DatesDatesArgs = {
  filter?: InputMaybe<Key_Dates_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type Enter_Page_Key_DatesEnter_PageArgs = {
  filter?: InputMaybe<Enter_Page_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

 type Enter_Page_Key_Dates_Aggregated = {
  __typename?: 'enter_page_key_dates_aggregated';
  avg?: Maybe<Enter_Page_Key_Dates_Aggregated_Fields>;
  avgDistinct?: Maybe<Enter_Page_Key_Dates_Aggregated_Fields>;
  count?: Maybe<Enter_Page_Key_Dates_Aggregated_Fields>;
  countDistinct?: Maybe<Enter_Page_Key_Dates_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Enter_Page_Key_Dates_Aggregated_Fields>;
  min?: Maybe<Enter_Page_Key_Dates_Aggregated_Fields>;
  sum?: Maybe<Enter_Page_Key_Dates_Aggregated_Fields>;
  sumDistinct?: Maybe<Enter_Page_Key_Dates_Aggregated_Fields>;
};

 type Enter_Page_Key_Dates_Aggregated_Fields = {
  __typename?: 'enter_page_key_dates_aggregated_fields';
  dates?: Maybe<Scalars['Float']>;
  enter_page?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

 type Enter_Page_Key_Dates_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Enter_Page_Key_Dates_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Enter_Page_Key_Dates_Filter>>>;
  dates?: InputMaybe<Key_Dates_Filter>;
  enter_page?: InputMaybe<Enter_Page_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
};

 type Enter_Page_Question_Text_Area = {
  __typename?: 'enter_page_question_text_area';
  enter_page?: Maybe<Enter_Page>;
  id?: Maybe<Scalars['ID']>;
  question?: Maybe<Question_Text_Area>;
};


 type Enter_Page_Question_Text_AreaEnter_PageArgs = {
  filter?: InputMaybe<Enter_Page_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type Enter_Page_Question_Text_AreaQuestionArgs = {
  filter?: InputMaybe<Question_Text_Area_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

 type Enter_Page_Question_Text_Area_Aggregated = {
  __typename?: 'enter_page_question_text_area_aggregated';
  avg?: Maybe<Enter_Page_Question_Text_Area_Aggregated_Fields>;
  avgDistinct?: Maybe<Enter_Page_Question_Text_Area_Aggregated_Fields>;
  count?: Maybe<Enter_Page_Question_Text_Area_Aggregated_Fields>;
  countDistinct?: Maybe<Enter_Page_Question_Text_Area_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Enter_Page_Question_Text_Area_Aggregated_Fields>;
  min?: Maybe<Enter_Page_Question_Text_Area_Aggregated_Fields>;
  sum?: Maybe<Enter_Page_Question_Text_Area_Aggregated_Fields>;
  sumDistinct?: Maybe<Enter_Page_Question_Text_Area_Aggregated_Fields>;
};

 type Enter_Page_Question_Text_Area_Aggregated_Fields = {
  __typename?: 'enter_page_question_text_area_aggregated_fields';
  enter_page?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  question?: Maybe<Scalars['Float']>;
};

 type Enter_Page_Question_Text_Area_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Enter_Page_Question_Text_Area_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Enter_Page_Question_Text_Area_Filter>>>;
  enter_page?: InputMaybe<Enter_Page_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  question?: InputMaybe<Question_Text_Area_Filter>;
};

 type Enter_Page_Question_Titles = {
  __typename?: 'enter_page_question_titles';
  enter_page?: Maybe<Enter_Page>;
  id?: Maybe<Scalars['ID']>;
  question?: Maybe<Question_Titles>;
};


 type Enter_Page_Question_TitlesEnter_PageArgs = {
  filter?: InputMaybe<Enter_Page_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type Enter_Page_Question_TitlesQuestionArgs = {
  filter?: InputMaybe<Question_Titles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

 type Enter_Page_Question_Titles_Aggregated = {
  __typename?: 'enter_page_question_titles_aggregated';
  avg?: Maybe<Enter_Page_Question_Titles_Aggregated_Fields>;
  avgDistinct?: Maybe<Enter_Page_Question_Titles_Aggregated_Fields>;
  count?: Maybe<Enter_Page_Question_Titles_Aggregated_Fields>;
  countDistinct?: Maybe<Enter_Page_Question_Titles_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Enter_Page_Question_Titles_Aggregated_Fields>;
  min?: Maybe<Enter_Page_Question_Titles_Aggregated_Fields>;
  sum?: Maybe<Enter_Page_Question_Titles_Aggregated_Fields>;
  sumDistinct?: Maybe<Enter_Page_Question_Titles_Aggregated_Fields>;
};

 type Enter_Page_Question_Titles_Aggregated_Fields = {
  __typename?: 'enter_page_question_titles_aggregated_fields';
  enter_page?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  question?: Maybe<Scalars['Float']>;
};

 type Enter_Page_Question_Titles_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Enter_Page_Question_Titles_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Enter_Page_Question_Titles_Filter>>>;
  enter_page?: InputMaybe<Enter_Page_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  question?: InputMaybe<Question_Titles_Filter>;
};

 type Finalist_Page = {
  __typename?: 'finalist_page';
  finalist_page_open?: Maybe<Scalars['Boolean']>;
  heading?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  title_header?: Maybe<Scalars['String']>;
  voting_enabled?: Maybe<Scalars['Boolean']>;
};

 type Footer = {
  __typename?: 'footer';
  copyright_text?: Maybe<Scalars['String']>;
  footer_logo?: Maybe<Directus_Files>;
  id?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
};


 type FooterFooter_LogoArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

 type Header = {
  __typename?: 'header';
  id?: Maybe<Scalars['ID']>;
  logo?: Maybe<Directus_Files>;
};


 type HeaderLogoArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

 type Home_Page = {
  __typename?: 'home_page';
  brands_section_CTA_label?: Maybe<Scalars['String']>;
  brands_section_description?: Maybe<Scalars['String']>;
  brands_section_heading?: Maybe<Scalars['String']>;
  current_year?: Maybe<Judges_Judges_Years>;
  current_year_filter?: Maybe<Judges_Years>;
  enter_now_section_CTA_label?: Maybe<Scalars['String']>;
  enter_now_section_body?: Maybe<Scalars['String']>;
  enter_now_section_heading?: Maybe<Scalars['String']>;
  enter_now_section_sub_heading?: Maybe<Scalars['String']>;
  hero_section_right_side_svg?: Maybe<Directus_Files>;
  hero_section_youtube_video_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  innovator_section_CTA_label?: Maybe<Scalars['String']>;
  innovator_section_body?: Maybe<Scalars['String']>;
  innovator_section_heading?: Maybe<Scalars['String']>;
  innovator_section_image?: Maybe<Directus_Files>;
  inspiration_articles?: Maybe<Array<Maybe<Home_Page_Inspiration_Articles>>>;
  meta_description?: Maybe<Scalars['String']>;
  title_bar_text?: Maybe<Scalars['String']>;
};


 type Home_PageCurrent_YearArgs = {
  filter?: InputMaybe<Judges_Judges_Years_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type Home_PageCurrent_Year_FilterArgs = {
  filter?: InputMaybe<Judges_Years_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type Home_PageHero_Section_Right_Side_SvgArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type Home_PageInnovator_Section_ImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type Home_PageInspiration_ArticlesArgs = {
  filter?: InputMaybe<Home_Page_Inspiration_Articles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

 type Home_Page_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Home_Page_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Home_Page_Filter>>>;
  brands_section_CTA_label?: InputMaybe<String_Filter_Operators>;
  brands_section_description?: InputMaybe<String_Filter_Operators>;
  brands_section_heading?: InputMaybe<String_Filter_Operators>;
  current_year?: InputMaybe<Judges_Judges_Years_Filter>;
  current_year_filter?: InputMaybe<Judges_Years_Filter>;
  enter_now_section_CTA_label?: InputMaybe<String_Filter_Operators>;
  enter_now_section_body?: InputMaybe<String_Filter_Operators>;
  enter_now_section_heading?: InputMaybe<String_Filter_Operators>;
  enter_now_section_sub_heading?: InputMaybe<String_Filter_Operators>;
  hero_section_right_side_svg?: InputMaybe<Directus_Files_Filter>;
  hero_section_youtube_video_id?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  innovator_section_CTA_label?: InputMaybe<String_Filter_Operators>;
  innovator_section_body?: InputMaybe<String_Filter_Operators>;
  innovator_section_heading?: InputMaybe<String_Filter_Operators>;
  innovator_section_image?: InputMaybe<Directus_Files_Filter>;
  inspiration_articles?: InputMaybe<Home_Page_Inspiration_Articles_Filter>;
  meta_description?: InputMaybe<String_Filter_Operators>;
  title_bar_text?: InputMaybe<String_Filter_Operators>;
};

 type Home_Page_Inspiration_Articles = {
  __typename?: 'home_page_inspiration_articles';
  home_page_id?: Maybe<Home_Page>;
  id?: Maybe<Scalars['ID']>;
  inspiration_article?: Maybe<Inspiration_Articles>;
};


 type Home_Page_Inspiration_ArticlesHome_Page_IdArgs = {
  filter?: InputMaybe<Home_Page_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type Home_Page_Inspiration_ArticlesInspiration_ArticleArgs = {
  filter?: InputMaybe<Inspiration_Articles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

 type Home_Page_Inspiration_Articles_Aggregated = {
  __typename?: 'home_page_inspiration_articles_aggregated';
  avg?: Maybe<Home_Page_Inspiration_Articles_Aggregated_Fields>;
  avgDistinct?: Maybe<Home_Page_Inspiration_Articles_Aggregated_Fields>;
  count?: Maybe<Home_Page_Inspiration_Articles_Aggregated_Fields>;
  countDistinct?: Maybe<Home_Page_Inspiration_Articles_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Home_Page_Inspiration_Articles_Aggregated_Fields>;
  min?: Maybe<Home_Page_Inspiration_Articles_Aggregated_Fields>;
  sum?: Maybe<Home_Page_Inspiration_Articles_Aggregated_Fields>;
  sumDistinct?: Maybe<Home_Page_Inspiration_Articles_Aggregated_Fields>;
};

 type Home_Page_Inspiration_Articles_Aggregated_Fields = {
  __typename?: 'home_page_inspiration_articles_aggregated_fields';
  home_page_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  inspiration_article?: Maybe<Scalars['Float']>;
};

 type Home_Page_Inspiration_Articles_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Home_Page_Inspiration_Articles_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Home_Page_Inspiration_Articles_Filter>>>;
  home_page_id?: InputMaybe<Home_Page_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  inspiration_article?: InputMaybe<Inspiration_Articles_Filter>;
};

 type Inspiration_Articles = {
  __typename?: 'inspiration_articles';
  body?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Directus_Files>;
  read_more_label?: Maybe<Scalars['String']>;
  read_more_link?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};


 type Inspiration_ArticlesImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

 type Inspiration_Articles_Aggregated = {
  __typename?: 'inspiration_articles_aggregated';
  avg?: Maybe<Inspiration_Articles_Aggregated_Fields>;
  avgDistinct?: Maybe<Inspiration_Articles_Aggregated_Fields>;
  count?: Maybe<Inspiration_Articles_Aggregated_Fields>;
  countDistinct?: Maybe<Inspiration_Articles_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Inspiration_Articles_Aggregated_Fields>;
  min?: Maybe<Inspiration_Articles_Aggregated_Fields>;
  sum?: Maybe<Inspiration_Articles_Aggregated_Fields>;
  sumDistinct?: Maybe<Inspiration_Articles_Aggregated_Fields>;
};

 type Inspiration_Articles_Aggregated_Fields = {
  __typename?: 'inspiration_articles_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

 type Inspiration_Articles_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Inspiration_Articles_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Inspiration_Articles_Filter>>>;
  body?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  read_more_label?: InputMaybe<String_Filter_Operators>;
  read_more_link?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

 type Inspiration_Page = {
  __typename?: 'inspiration_page';
  description?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  hero_image?: Maybe<Directus_Files>;
  id?: Maybe<Scalars['ID']>;
  meta_description?: Maybe<Scalars['String']>;
  title_bar_text?: Maybe<Scalars['String']>;
};


 type Inspiration_PageHero_ImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

 type Judges = {
  __typename?: 'judges';
  about_text?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Directus_Files>;
  name?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  years?: Maybe<Array<Maybe<Judges_Judges_Years>>>;
};


 type JudgesImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type JudgesYearsArgs = {
  filter?: InputMaybe<Judges_Judges_Years_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

 type Judges_Aggregated = {
  __typename?: 'judges_aggregated';
  avg?: Maybe<Judges_Aggregated_Fields>;
  avgDistinct?: Maybe<Judges_Aggregated_Fields>;
  count?: Maybe<Judges_Aggregated_Fields>;
  countDistinct?: Maybe<Judges_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Judges_Aggregated_Fields>;
  min?: Maybe<Judges_Aggregated_Fields>;
  sum?: Maybe<Judges_Aggregated_Fields>;
  sumDistinct?: Maybe<Judges_Aggregated_Fields>;
};

 type Judges_Aggregated_Fields = {
  __typename?: 'judges_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

 type Judges_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Judges_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Judges_Filter>>>;
  about_text?: InputMaybe<String_Filter_Operators>;
  bio?: InputMaybe<String_Filter_Operators>;
  company?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  name?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  years?: InputMaybe<Judges_Judges_Years_Filter>;
};

 type Judges_Judges_Years = {
  __typename?: 'judges_judges_years';
  id?: Maybe<Scalars['ID']>;
  judges_id?: Maybe<Judges>;
  judges_year?: Maybe<Judges_Years>;
};


 type Judges_Judges_YearsJudges_IdArgs = {
  filter?: InputMaybe<Judges_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type Judges_Judges_YearsJudges_YearArgs = {
  filter?: InputMaybe<Judges_Years_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

 type Judges_Judges_Years_Aggregated = {
  __typename?: 'judges_judges_years_aggregated';
  avg?: Maybe<Judges_Judges_Years_Aggregated_Fields>;
  avgDistinct?: Maybe<Judges_Judges_Years_Aggregated_Fields>;
  count?: Maybe<Judges_Judges_Years_Aggregated_Fields>;
  countDistinct?: Maybe<Judges_Judges_Years_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Judges_Judges_Years_Aggregated_Fields>;
  min?: Maybe<Judges_Judges_Years_Aggregated_Fields>;
  sum?: Maybe<Judges_Judges_Years_Aggregated_Fields>;
  sumDistinct?: Maybe<Judges_Judges_Years_Aggregated_Fields>;
};

 type Judges_Judges_Years_Aggregated_Fields = {
  __typename?: 'judges_judges_years_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  judges_id?: Maybe<Scalars['Float']>;
  judges_year?: Maybe<Scalars['Float']>;
};

 type Judges_Judges_Years_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Judges_Judges_Years_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Judges_Judges_Years_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  judges_id?: InputMaybe<Judges_Filter>;
  judges_year?: InputMaybe<Judges_Years_Filter>;
};

 type Judges_Page = {
  __typename?: 'judges_page';
  heading?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  meta_description?: Maybe<Scalars['String']>;
  title_bar_text?: Maybe<Scalars['String']>;
};

 type Judges_Years = {
  __typename?: 'judges_years';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']>;
  sort?: Maybe<Scalars['Int']>;
  year: Scalars['String'];
};

 type Judges_Years_Aggregated = {
  __typename?: 'judges_years_aggregated';
  avg?: Maybe<Judges_Years_Aggregated_Fields>;
  avgDistinct?: Maybe<Judges_Years_Aggregated_Fields>;
  count?: Maybe<Judges_Years_Aggregated_Fields>;
  countDistinct?: Maybe<Judges_Years_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Judges_Years_Aggregated_Fields>;
  min?: Maybe<Judges_Years_Aggregated_Fields>;
  sum?: Maybe<Judges_Years_Aggregated_Fields>;
  sumDistinct?: Maybe<Judges_Years_Aggregated_Fields>;
};

 type Judges_Years_Aggregated_Fields = {
  __typename?: 'judges_years_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

 type Judges_Years_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Judges_Years_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Judges_Years_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<String_Filter_Operators>;
};

 type Key_Dates = {
  __typename?: 'key_dates';
  date?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  subtext?: Maybe<Scalars['String']>;
};

 type Key_Dates_Aggregated = {
  __typename?: 'key_dates_aggregated';
  avg?: Maybe<Key_Dates_Aggregated_Fields>;
  avgDistinct?: Maybe<Key_Dates_Aggregated_Fields>;
  count?: Maybe<Key_Dates_Aggregated_Fields>;
  countDistinct?: Maybe<Key_Dates_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Key_Dates_Aggregated_Fields>;
  min?: Maybe<Key_Dates_Aggregated_Fields>;
  sum?: Maybe<Key_Dates_Aggregated_Fields>;
  sumDistinct?: Maybe<Key_Dates_Aggregated_Fields>;
};

 type Key_Dates_Aggregated_Fields = {
  __typename?: 'key_dates_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

 type Key_Dates_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Key_Dates_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Key_Dates_Filter>>>;
  date?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  subtext?: InputMaybe<String_Filter_Operators>;
};

 type Multi_Level_Question_Item_Links = {
  __typename?: 'multi_level_question_item_links';
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

 type Multi_Level_Question_Item_Links_Aggregated = {
  __typename?: 'multi_level_question_item_links_aggregated';
  avg?: Maybe<Multi_Level_Question_Item_Links_Aggregated_Fields>;
  avgDistinct?: Maybe<Multi_Level_Question_Item_Links_Aggregated_Fields>;
  count?: Maybe<Multi_Level_Question_Item_Links_Aggregated_Fields>;
  countDistinct?: Maybe<Multi_Level_Question_Item_Links_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Multi_Level_Question_Item_Links_Aggregated_Fields>;
  min?: Maybe<Multi_Level_Question_Item_Links_Aggregated_Fields>;
  sum?: Maybe<Multi_Level_Question_Item_Links_Aggregated_Fields>;
  sumDistinct?: Maybe<Multi_Level_Question_Item_Links_Aggregated_Fields>;
};

 type Multi_Level_Question_Item_Links_Aggregated_Fields = {
  __typename?: 'multi_level_question_item_links_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

 type Multi_Level_Question_Item_Links_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Multi_Level_Question_Item_Links_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Multi_Level_Question_Item_Links_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  label?: InputMaybe<String_Filter_Operators>;
  url?: InputMaybe<String_Filter_Operators>;
};

 type Multi_Level_Question_Items = {
  __typename?: 'multi_level_question_items';
  id?: Maybe<Scalars['ID']>;
  level_1_title?: Maybe<Scalars['String']>;
  level_2_subtext?: Maybe<Scalars['String']>;
  level_2_title?: Maybe<Scalars['String']>;
  level_3_links?: Maybe<Array<Maybe<Multi_Level_Question_Items_Multi_Level_Question_Item_Links>>>;
  level_3_text?: Maybe<Scalars['String']>;
};


 type Multi_Level_Question_ItemsLevel_3_LinksArgs = {
  filter?: InputMaybe<Multi_Level_Question_Items_Multi_Level_Question_Item_Links_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

 type Multi_Level_Question_Items_Aggregated = {
  __typename?: 'multi_level_question_items_aggregated';
  avg?: Maybe<Multi_Level_Question_Items_Aggregated_Fields>;
  avgDistinct?: Maybe<Multi_Level_Question_Items_Aggregated_Fields>;
  count?: Maybe<Multi_Level_Question_Items_Aggregated_Fields>;
  countDistinct?: Maybe<Multi_Level_Question_Items_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Multi_Level_Question_Items_Aggregated_Fields>;
  min?: Maybe<Multi_Level_Question_Items_Aggregated_Fields>;
  sum?: Maybe<Multi_Level_Question_Items_Aggregated_Fields>;
  sumDistinct?: Maybe<Multi_Level_Question_Items_Aggregated_Fields>;
};

 type Multi_Level_Question_Items_Aggregated_Fields = {
  __typename?: 'multi_level_question_items_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

 type Multi_Level_Question_Items_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Multi_Level_Question_Items_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Multi_Level_Question_Items_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  level_1_title?: InputMaybe<String_Filter_Operators>;
  level_2_subtext?: InputMaybe<String_Filter_Operators>;
  level_2_title?: InputMaybe<String_Filter_Operators>;
  level_3_links?: InputMaybe<Multi_Level_Question_Items_Multi_Level_Question_Item_Links_Filter>;
  level_3_text?: InputMaybe<String_Filter_Operators>;
};

 type Multi_Level_Question_Items_Multi_Level_Question_Item_Links = {
  __typename?: 'multi_level_question_items_multi_level_question_item_links';
  id?: Maybe<Scalars['ID']>;
  multi_level_question_item_links?: Maybe<Multi_Level_Question_Item_Links>;
  multi_level_question_items?: Maybe<Multi_Level_Question_Items>;
};


 type Multi_Level_Question_Items_Multi_Level_Question_Item_LinksMulti_Level_Question_Item_LinksArgs = {
  filter?: InputMaybe<Multi_Level_Question_Item_Links_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type Multi_Level_Question_Items_Multi_Level_Question_Item_LinksMulti_Level_Question_ItemsArgs = {
  filter?: InputMaybe<Multi_Level_Question_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

 type Multi_Level_Question_Items_Multi_Level_Question_Item_Links_Aggregated = {
  __typename?: 'multi_level_question_items_multi_level_question_item_links_aggregated';
  avg?: Maybe<Multi_Level_Question_Items_Multi_Level_Question_Item_Links_Aggregated_Fields>;
  avgDistinct?: Maybe<Multi_Level_Question_Items_Multi_Level_Question_Item_Links_Aggregated_Fields>;
  count?: Maybe<Multi_Level_Question_Items_Multi_Level_Question_Item_Links_Aggregated_Fields>;
  countDistinct?: Maybe<Multi_Level_Question_Items_Multi_Level_Question_Item_Links_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Multi_Level_Question_Items_Multi_Level_Question_Item_Links_Aggregated_Fields>;
  min?: Maybe<Multi_Level_Question_Items_Multi_Level_Question_Item_Links_Aggregated_Fields>;
  sum?: Maybe<Multi_Level_Question_Items_Multi_Level_Question_Item_Links_Aggregated_Fields>;
  sumDistinct?: Maybe<Multi_Level_Question_Items_Multi_Level_Question_Item_Links_Aggregated_Fields>;
};

 type Multi_Level_Question_Items_Multi_Level_Question_Item_Links_Aggregated_Fields = {
  __typename?: 'multi_level_question_items_multi_level_question_item_links_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  multi_level_question_item_links?: Maybe<Scalars['Float']>;
  multi_level_question_items?: Maybe<Scalars['Float']>;
};

 type Multi_Level_Question_Items_Multi_Level_Question_Item_Links_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Multi_Level_Question_Items_Multi_Level_Question_Item_Links_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Multi_Level_Question_Items_Multi_Level_Question_Item_Links_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  multi_level_question_item_links?: InputMaybe<Multi_Level_Question_Item_Links_Filter>;
  multi_level_question_items?: InputMaybe<Multi_Level_Question_Items_Filter>;
};

 type Number_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Float']>;
  _gt?: InputMaybe<Scalars['Float']>;
  _gte?: InputMaybe<Scalars['Float']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  _lt?: InputMaybe<Scalars['Float']>;
  _lte?: InputMaybe<Scalars['Float']>;
  _neq?: InputMaybe<Scalars['Float']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

 type Our_Sponsors = {
  __typename?: 'our_sponsors';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Directus_Files>;
  link?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
};


 type Our_SponsorsImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

 type Our_Sponsors_Aggregated = {
  __typename?: 'our_sponsors_aggregated';
  avg?: Maybe<Our_Sponsors_Aggregated_Fields>;
  avgDistinct?: Maybe<Our_Sponsors_Aggregated_Fields>;
  count?: Maybe<Our_Sponsors_Aggregated_Fields>;
  countDistinct?: Maybe<Our_Sponsors_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Our_Sponsors_Aggregated_Fields>;
  min?: Maybe<Our_Sponsors_Aggregated_Fields>;
  sum?: Maybe<Our_Sponsors_Aggregated_Fields>;
  sumDistinct?: Maybe<Our_Sponsors_Aggregated_Fields>;
};

 type Our_Sponsors_Aggregated_Fields = {
  __typename?: 'our_sponsors_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

 type Our_Sponsors_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Our_Sponsors_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Our_Sponsors_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  link?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

 type Partners = {
  __typename?: 'partners';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Directus_Files>;
  link?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
};


 type PartnersImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

 type Partners_Aggregated = {
  __typename?: 'partners_aggregated';
  avg?: Maybe<Partners_Aggregated_Fields>;
  avgDistinct?: Maybe<Partners_Aggregated_Fields>;
  count?: Maybe<Partners_Aggregated_Fields>;
  countDistinct?: Maybe<Partners_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Partners_Aggregated_Fields>;
  min?: Maybe<Partners_Aggregated_Fields>;
  sum?: Maybe<Partners_Aggregated_Fields>;
  sumDistinct?: Maybe<Partners_Aggregated_Fields>;
};

 type Partners_Aggregated_Fields = {
  __typename?: 'partners_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

 type Partners_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Partners_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Partners_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  link?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

 type Past_Winners = {
  __typename?: 'past_winners';
  categories?: Maybe<Array<Maybe<Past_Winners_Past_Winners_Categories>>>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  display_on_winners_page?: Maybe<Scalars['Boolean']>;
  finalist?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Directus_Files>;
  name?: Maybe<Scalars['String']>;
  project_information?: Maybe<Scalars['String']>;
  school_name?: Maybe<Scalars['String']>;
  short_description?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  students_name?: Maybe<Scalars['String']>;
  worksheets?: Maybe<Array<Maybe<Past_Winners_Past_Winners_Worksheets>>>;
  year?: Maybe<Array<Maybe<Past_Winners_Past_Winners_Years>>>;
  youtube_video_id?: Maybe<Scalars['String']>;
};


 type Past_WinnersCategoriesArgs = {
  filter?: InputMaybe<Past_Winners_Past_Winners_Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type Past_WinnersImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type Past_WinnersWorksheetsArgs = {
  filter?: InputMaybe<Past_Winners_Past_Winners_Worksheets_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type Past_WinnersYearArgs = {
  filter?: InputMaybe<Past_Winners_Past_Winners_Years_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

 type Past_Winners_Aggregated = {
  __typename?: 'past_winners_aggregated';
  avg?: Maybe<Past_Winners_Aggregated_Fields>;
  avgDistinct?: Maybe<Past_Winners_Aggregated_Fields>;
  count?: Maybe<Past_Winners_Aggregated_Fields>;
  countDistinct?: Maybe<Past_Winners_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Past_Winners_Aggregated_Fields>;
  min?: Maybe<Past_Winners_Aggregated_Fields>;
  sum?: Maybe<Past_Winners_Aggregated_Fields>;
  sumDistinct?: Maybe<Past_Winners_Aggregated_Fields>;
};

 type Past_Winners_Aggregated_Fields = {
  __typename?: 'past_winners_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

 type Past_Winners_Categories = {
  __typename?: 'past_winners_categories';
  category: Scalars['String'];
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']>;
  sort?: Maybe<Scalars['Int']>;
};

 type Past_Winners_Categories_Aggregated = {
  __typename?: 'past_winners_categories_aggregated';
  avg?: Maybe<Past_Winners_Categories_Aggregated_Fields>;
  avgDistinct?: Maybe<Past_Winners_Categories_Aggregated_Fields>;
  count?: Maybe<Past_Winners_Categories_Aggregated_Fields>;
  countDistinct?: Maybe<Past_Winners_Categories_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Past_Winners_Categories_Aggregated_Fields>;
  min?: Maybe<Past_Winners_Categories_Aggregated_Fields>;
  sum?: Maybe<Past_Winners_Categories_Aggregated_Fields>;
  sumDistinct?: Maybe<Past_Winners_Categories_Aggregated_Fields>;
};

 type Past_Winners_Categories_Aggregated_Fields = {
  __typename?: 'past_winners_categories_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

 type Past_Winners_Categories_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Past_Winners_Categories_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Past_Winners_Categories_Filter>>>;
  category?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

 type Past_Winners_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Past_Winners_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Past_Winners_Filter>>>;
  categories?: InputMaybe<Past_Winners_Past_Winners_Categories_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  display_on_winners_page?: InputMaybe<Boolean_Filter_Operators>;
  finalist?: InputMaybe<Boolean_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  name?: InputMaybe<String_Filter_Operators>;
  project_information?: InputMaybe<String_Filter_Operators>;
  school_name?: InputMaybe<String_Filter_Operators>;
  short_description?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  students_name?: InputMaybe<String_Filter_Operators>;
  worksheets?: InputMaybe<Past_Winners_Past_Winners_Worksheets_Filter>;
  year?: InputMaybe<Past_Winners_Past_Winners_Years_Filter>;
  youtube_video_id?: InputMaybe<String_Filter_Operators>;
};

 type Past_Winners_Page = {
  __typename?: 'past_winners_page';
  heading?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  meta_description?: Maybe<Scalars['String']>;
  title_bar_text?: Maybe<Scalars['String']>;
};

 type Past_Winners_Past_Winners_Categories = {
  __typename?: 'past_winners_past_winners_categories';
  id?: Maybe<Scalars['ID']>;
  past_winners_category?: Maybe<Past_Winners_Categories>;
  past_winners_id?: Maybe<Past_Winners>;
};


 type Past_Winners_Past_Winners_CategoriesPast_Winners_CategoryArgs = {
  filter?: InputMaybe<Past_Winners_Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type Past_Winners_Past_Winners_CategoriesPast_Winners_IdArgs = {
  filter?: InputMaybe<Past_Winners_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

 type Past_Winners_Past_Winners_Categories_Aggregated = {
  __typename?: 'past_winners_past_winners_categories_aggregated';
  avg?: Maybe<Past_Winners_Past_Winners_Categories_Aggregated_Fields>;
  avgDistinct?: Maybe<Past_Winners_Past_Winners_Categories_Aggregated_Fields>;
  count?: Maybe<Past_Winners_Past_Winners_Categories_Aggregated_Fields>;
  countDistinct?: Maybe<Past_Winners_Past_Winners_Categories_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Past_Winners_Past_Winners_Categories_Aggregated_Fields>;
  min?: Maybe<Past_Winners_Past_Winners_Categories_Aggregated_Fields>;
  sum?: Maybe<Past_Winners_Past_Winners_Categories_Aggregated_Fields>;
  sumDistinct?: Maybe<Past_Winners_Past_Winners_Categories_Aggregated_Fields>;
};

 type Past_Winners_Past_Winners_Categories_Aggregated_Fields = {
  __typename?: 'past_winners_past_winners_categories_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  past_winners_category?: Maybe<Scalars['Float']>;
  past_winners_id?: Maybe<Scalars['Float']>;
};

 type Past_Winners_Past_Winners_Categories_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Past_Winners_Past_Winners_Categories_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Past_Winners_Past_Winners_Categories_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  past_winners_category?: InputMaybe<Past_Winners_Categories_Filter>;
  past_winners_id?: InputMaybe<Past_Winners_Filter>;
};

 type Past_Winners_Past_Winners_Worksheets = {
  __typename?: 'past_winners_past_winners_worksheets';
  id?: Maybe<Scalars['ID']>;
  past_winners_id?: Maybe<Past_Winners>;
  past_winners_worksheet?: Maybe<Past_Winners_Worksheets>;
};


 type Past_Winners_Past_Winners_WorksheetsPast_Winners_IdArgs = {
  filter?: InputMaybe<Past_Winners_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type Past_Winners_Past_Winners_WorksheetsPast_Winners_WorksheetArgs = {
  filter?: InputMaybe<Past_Winners_Worksheets_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

 type Past_Winners_Past_Winners_Worksheets_Aggregated = {
  __typename?: 'past_winners_past_winners_worksheets_aggregated';
  avg?: Maybe<Past_Winners_Past_Winners_Worksheets_Aggregated_Fields>;
  avgDistinct?: Maybe<Past_Winners_Past_Winners_Worksheets_Aggregated_Fields>;
  count?: Maybe<Past_Winners_Past_Winners_Worksheets_Aggregated_Fields>;
  countDistinct?: Maybe<Past_Winners_Past_Winners_Worksheets_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Past_Winners_Past_Winners_Worksheets_Aggregated_Fields>;
  min?: Maybe<Past_Winners_Past_Winners_Worksheets_Aggregated_Fields>;
  sum?: Maybe<Past_Winners_Past_Winners_Worksheets_Aggregated_Fields>;
  sumDistinct?: Maybe<Past_Winners_Past_Winners_Worksheets_Aggregated_Fields>;
};

 type Past_Winners_Past_Winners_Worksheets_Aggregated_Fields = {
  __typename?: 'past_winners_past_winners_worksheets_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  past_winners_id?: Maybe<Scalars['Float']>;
  past_winners_worksheet?: Maybe<Scalars['Float']>;
};

 type Past_Winners_Past_Winners_Worksheets_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Past_Winners_Past_Winners_Worksheets_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Past_Winners_Past_Winners_Worksheets_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  past_winners_id?: InputMaybe<Past_Winners_Filter>;
  past_winners_worksheet?: InputMaybe<Past_Winners_Worksheets_Filter>;
};

 type Past_Winners_Past_Winners_Years = {
  __typename?: 'past_winners_past_winners_years';
  id?: Maybe<Scalars['ID']>;
  past_winners_id?: Maybe<Past_Winners>;
  past_winners_year?: Maybe<Past_Winners_Years>;
};


 type Past_Winners_Past_Winners_YearsPast_Winners_IdArgs = {
  filter?: InputMaybe<Past_Winners_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type Past_Winners_Past_Winners_YearsPast_Winners_YearArgs = {
  filter?: InputMaybe<Past_Winners_Years_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

 type Past_Winners_Past_Winners_Years_Aggregated = {
  __typename?: 'past_winners_past_winners_years_aggregated';
  avg?: Maybe<Past_Winners_Past_Winners_Years_Aggregated_Fields>;
  avgDistinct?: Maybe<Past_Winners_Past_Winners_Years_Aggregated_Fields>;
  count?: Maybe<Past_Winners_Past_Winners_Years_Aggregated_Fields>;
  countDistinct?: Maybe<Past_Winners_Past_Winners_Years_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Past_Winners_Past_Winners_Years_Aggregated_Fields>;
  min?: Maybe<Past_Winners_Past_Winners_Years_Aggregated_Fields>;
  sum?: Maybe<Past_Winners_Past_Winners_Years_Aggregated_Fields>;
  sumDistinct?: Maybe<Past_Winners_Past_Winners_Years_Aggregated_Fields>;
};

 type Past_Winners_Past_Winners_Years_Aggregated_Fields = {
  __typename?: 'past_winners_past_winners_years_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  past_winners_id?: Maybe<Scalars['Float']>;
  past_winners_year?: Maybe<Scalars['Float']>;
};

 type Past_Winners_Past_Winners_Years_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Past_Winners_Past_Winners_Years_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Past_Winners_Past_Winners_Years_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  past_winners_id?: InputMaybe<Past_Winners_Filter>;
  past_winners_year?: InputMaybe<Past_Winners_Years_Filter>;
};

 type Past_Winners_Worksheets = {
  __typename?: 'past_winners_worksheets';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']>;
  sort?: Maybe<Scalars['Int']>;
  worksheet?: Maybe<Directus_Files>;
};


 type Past_Winners_WorksheetsWorksheetArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

 type Past_Winners_Worksheets_Aggregated = {
  __typename?: 'past_winners_worksheets_aggregated';
  avg?: Maybe<Past_Winners_Worksheets_Aggregated_Fields>;
  avgDistinct?: Maybe<Past_Winners_Worksheets_Aggregated_Fields>;
  count?: Maybe<Past_Winners_Worksheets_Aggregated_Fields>;
  countDistinct?: Maybe<Past_Winners_Worksheets_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Past_Winners_Worksheets_Aggregated_Fields>;
  min?: Maybe<Past_Winners_Worksheets_Aggregated_Fields>;
  sum?: Maybe<Past_Winners_Worksheets_Aggregated_Fields>;
  sumDistinct?: Maybe<Past_Winners_Worksheets_Aggregated_Fields>;
};

 type Past_Winners_Worksheets_Aggregated_Fields = {
  __typename?: 'past_winners_worksheets_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

 type Past_Winners_Worksheets_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Past_Winners_Worksheets_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Past_Winners_Worksheets_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  worksheet?: InputMaybe<Directus_Files_Filter>;
};

 type Past_Winners_Years = {
  __typename?: 'past_winners_years';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']>;
  sort?: Maybe<Scalars['Int']>;
  year: Scalars['Int'];
};

 type Past_Winners_Years_Aggregated = {
  __typename?: 'past_winners_years_aggregated';
  avg?: Maybe<Past_Winners_Years_Aggregated_Fields>;
  avgDistinct?: Maybe<Past_Winners_Years_Aggregated_Fields>;
  count?: Maybe<Past_Winners_Years_Aggregated_Fields>;
  countDistinct?: Maybe<Past_Winners_Years_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Past_Winners_Years_Aggregated_Fields>;
  min?: Maybe<Past_Winners_Years_Aggregated_Fields>;
  sum?: Maybe<Past_Winners_Years_Aggregated_Fields>;
  sumDistinct?: Maybe<Past_Winners_Years_Aggregated_Fields>;
};

 type Past_Winners_Years_Aggregated_Fields = {
  __typename?: 'past_winners_years_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

 type Past_Winners_Years_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Past_Winners_Years_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Past_Winners_Years_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

 type Question_Text_Area = {
  __typename?: 'question_text_area';
  body?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

 type Question_Text_Area_Aggregated = {
  __typename?: 'question_text_area_aggregated';
  avg?: Maybe<Question_Text_Area_Aggregated_Fields>;
  avgDistinct?: Maybe<Question_Text_Area_Aggregated_Fields>;
  count?: Maybe<Question_Text_Area_Aggregated_Fields>;
  countDistinct?: Maybe<Question_Text_Area_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Question_Text_Area_Aggregated_Fields>;
  min?: Maybe<Question_Text_Area_Aggregated_Fields>;
  sum?: Maybe<Question_Text_Area_Aggregated_Fields>;
  sumDistinct?: Maybe<Question_Text_Area_Aggregated_Fields>;
};

 type Question_Text_Area_Aggregated_Fields = {
  __typename?: 'question_text_area_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

 type Question_Text_Area_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Question_Text_Area_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Question_Text_Area_Filter>>>;
  body?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

 type Question_Titles = {
  __typename?: 'question_titles';
  body?: Maybe<Array<Maybe<Question_Titles_Multi_Level_Question_Items>>>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};


 type Question_TitlesBodyArgs = {
  filter?: InputMaybe<Question_Titles_Multi_Level_Question_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

 type Question_Titles_Aggregated = {
  __typename?: 'question_titles_aggregated';
  avg?: Maybe<Question_Titles_Aggregated_Fields>;
  avgDistinct?: Maybe<Question_Titles_Aggregated_Fields>;
  count?: Maybe<Question_Titles_Aggregated_Fields>;
  countDistinct?: Maybe<Question_Titles_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Question_Titles_Aggregated_Fields>;
  min?: Maybe<Question_Titles_Aggregated_Fields>;
  sum?: Maybe<Question_Titles_Aggregated_Fields>;
  sumDistinct?: Maybe<Question_Titles_Aggregated_Fields>;
};

 type Question_Titles_Aggregated_Fields = {
  __typename?: 'question_titles_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

 type Question_Titles_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Question_Titles_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Question_Titles_Filter>>>;
  body?: InputMaybe<Question_Titles_Multi_Level_Question_Items_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

 type Question_Titles_Multi_Level_Question_Items = {
  __typename?: 'question_titles_multi_level_question_items';
  id?: Maybe<Scalars['ID']>;
  multi_level_question_items?: Maybe<Multi_Level_Question_Items>;
  question?: Maybe<Question_Titles>;
};


 type Question_Titles_Multi_Level_Question_ItemsMulti_Level_Question_ItemsArgs = {
  filter?: InputMaybe<Multi_Level_Question_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


 type Question_Titles_Multi_Level_Question_ItemsQuestionArgs = {
  filter?: InputMaybe<Question_Titles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

 type Question_Titles_Multi_Level_Question_Items_Aggregated = {
  __typename?: 'question_titles_multi_level_question_items_aggregated';
  avg?: Maybe<Question_Titles_Multi_Level_Question_Items_Aggregated_Fields>;
  avgDistinct?: Maybe<Question_Titles_Multi_Level_Question_Items_Aggregated_Fields>;
  count?: Maybe<Question_Titles_Multi_Level_Question_Items_Aggregated_Fields>;
  countDistinct?: Maybe<Question_Titles_Multi_Level_Question_Items_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Question_Titles_Multi_Level_Question_Items_Aggregated_Fields>;
  min?: Maybe<Question_Titles_Multi_Level_Question_Items_Aggregated_Fields>;
  sum?: Maybe<Question_Titles_Multi_Level_Question_Items_Aggregated_Fields>;
  sumDistinct?: Maybe<Question_Titles_Multi_Level_Question_Items_Aggregated_Fields>;
};

 type Question_Titles_Multi_Level_Question_Items_Aggregated_Fields = {
  __typename?: 'question_titles_multi_level_question_items_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  multi_level_question_items?: Maybe<Scalars['Float']>;
  question?: Maybe<Scalars['Float']>;
};

 type Question_Titles_Multi_Level_Question_Items_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Question_Titles_Multi_Level_Question_Items_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Question_Titles_Multi_Level_Question_Items_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  multi_level_question_items?: InputMaybe<Multi_Level_Question_Items_Filter>;
  question?: InputMaybe<Question_Titles_Filter>;
};

 type Social_Media_Links = {
  __typename?: 'social_media_links';
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Directus_Files>;
  link?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
};


 type Social_Media_LinksImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

 type Social_Media_Links_Aggregated = {
  __typename?: 'social_media_links_aggregated';
  avg?: Maybe<Social_Media_Links_Aggregated_Fields>;
  avgDistinct?: Maybe<Social_Media_Links_Aggregated_Fields>;
  count?: Maybe<Social_Media_Links_Aggregated_Fields>;
  countDistinct?: Maybe<Social_Media_Links_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Social_Media_Links_Aggregated_Fields>;
  min?: Maybe<Social_Media_Links_Aggregated_Fields>;
  sum?: Maybe<Social_Media_Links_Aggregated_Fields>;
  sumDistinct?: Maybe<Social_Media_Links_Aggregated_Fields>;
};

 type Social_Media_Links_Aggregated_Fields = {
  __typename?: 'social_media_links_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

 type Social_Media_Links_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Social_Media_Links_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Social_Media_Links_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  link?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

 type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']>;
  _empty?: InputMaybe<Scalars['Boolean']>;
  _ends_with?: InputMaybe<Scalars['String']>;
  _eq?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _ncontains?: InputMaybe<Scalars['String']>;
  _nempty?: InputMaybe<Scalars['Boolean']>;
  _nends_with?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _nstarts_with?: InputMaybe<Scalars['String']>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _starts_with?: InputMaybe<Scalars['String']>;
};

 type HeaderAndFooterQueryVariables = Exact<{ [key: string]: never; }>;


 type HeaderAndFooterQuery = { __typename?: 'Query', header?: { __typename?: 'header', id?: string | null, logo?: { __typename?: 'directus_files', id?: string | null, filename_disk?: string | null, description?: string | null, svg_code?: string | null } | null } | null, footer?: { __typename?: 'footer', id?: string | null, text?: string | null, copyright_text?: string | null, footer_logo?: { __typename?: 'directus_files', id?: string | null, filename_disk?: string | null, description?: string | null, svg_code?: string | null } | null } | null, partners?: Array<{ __typename?: 'partners', id?: string | null, link?: string | null, image?: { __typename?: 'directus_files', id?: string | null, filename_disk?: string | null, description?: string | null, svg_code?: string | null } | null } | null> | null, our_sponsors?: Array<{ __typename?: 'our_sponsors', id?: string | null, link?: string | null, image?: { __typename?: 'directus_files', filename_disk?: string | null, id?: string | null, description?: string | null, svg_code?: string | null } | null } | null> | null, social_media_links?: Array<{ __typename?: 'social_media_links', id?: string | null, link?: string | null, image?: { __typename?: 'directus_files', id?: string | null, filename_disk?: string | null, description?: string | null, svg_code?: string | null } | null } | null> | null };

 type AboutPageQueryVariables = Exact<{ [key: string]: never; }>;


 type AboutPageQuery = { __typename?: 'Query', about_page?: { __typename?: 'about_page', id?: string | null, title_bar_text?: string | null, meta_description?: string | null, heading?: string | null, enter_now_section_CTA_label?: string | null, challenge_section_youtube_video_id?: string | null, challenge_section_heading?: string | null, challenge_section_body?: string | null, judges_section_heading?: string | null, judges_section_body?: string | null, judges_section_CTA_label?: string | null, brands_section_text?: string | null, enter_now_section_image?: { __typename?: 'directus_files', id?: string | null, filename_disk?: string | null, description?: string | null, svg_code?: string | null } | null, judges_section_judge?: Array<{ __typename?: 'about_page_judges_1', id?: string | null, judge?: { __typename?: 'judges', id?: string | null, name?: string | null, company?: string | null, image?: { __typename?: 'directus_files', id?: string | null, filename_disk?: string | null, description?: string | null, svg_code?: string | null } | null } | null } | null> | null, multi_level_questions?: Array<{ __typename?: 'about_page_question_titles', id?: string | null, question?: { __typename?: 'question_titles', id?: string | null, title?: string | null, body?: Array<{ __typename?: 'question_titles_multi_level_question_items', id?: string | null, multi_level_question_items?: { __typename?: 'multi_level_question_items', id?: string | null, level_1_title?: string | null, level_2_title?: string | null, level_2_subtext?: string | null, level_3_text?: string | null, level_3_links?: Array<{ __typename?: 'multi_level_question_items_multi_level_question_item_links', id?: string | null, multi_level_question_item_links?: { __typename?: 'multi_level_question_item_links', id?: string | null, label?: string | null, url?: string | null } | null } | null> | null } | null } | null> | null } | null } | null> | null, textarea_questions?: Array<{ __typename?: 'about_page_question_text_area', id?: string | null, question?: { __typename?: 'question_text_area', id?: string | null, title?: string | null, body?: string | null } | null } | null> | null } | null, brands?: Array<{ __typename?: 'brands', id?: string | null, image?: { __typename?: 'directus_files', id?: string | null, description?: string | null, filename_disk?: string | null, svg_code?: string | null } | null } | null> | null };

 type EnterPageQueryVariables = Exact<{ [key: string]: never; }>;


 type EnterPageQuery = { __typename?: 'Query', enter_page?: { __typename?: 'enter_page', id?: string | null, meta_description?: string | null, key_dates_title?: string | null, key_dates_youtube_video_id?: string | null, timeline_section_heading?: string | null, heading?: string | null, title_bar_text?: string | null, timeline_section_image?: { __typename?: 'directus_files', id?: string | null, filename_disk?: string | null, description?: string | null, svg_code?: string | null } | null, key_dates?: Array<{ __typename?: 'enter_page_key_dates', id?: string | null, dates?: { __typename?: 'key_dates', id?: string | null, date?: string | null, subtext?: string | null } | null } | null> | null, text_area_questions?: Array<{ __typename?: 'enter_page_question_text_area', id?: string | null, question?: { __typename?: 'question_text_area', id?: string | null, body?: string | null, title?: string | null } | null } | null> | null, multi_level_questions?: Array<{ __typename?: 'enter_page_question_titles', id?: string | null, question?: { __typename?: 'question_titles', id?: string | null, title?: string | null, body?: Array<{ __typename?: 'question_titles_multi_level_question_items', id?: string | null, multi_level_question_items?: { __typename?: 'multi_level_question_items', id?: string | null, level_1_title?: string | null, level_2_title?: string | null, level_2_subtext?: string | null, level_3_text?: string | null, level_3_links?: Array<{ __typename?: 'multi_level_question_items_multi_level_question_item_links', id?: string | null, multi_level_question_item_links?: { __typename?: 'multi_level_question_item_links', id?: string | null, label?: string | null, url?: string | null } | null } | null> | null } | null } | null> | null } | null } | null> | null } | null };

 type HomePageQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  filterQuery?: InputMaybe<Past_Winners_Filter>;
}>;


 type HomePageQuery = { __typename?: 'Query', home_page?: { __typename?: 'home_page', id?: string | null, title_bar_text?: string | null, meta_description?: string | null, enter_now_section_heading?: string | null, enter_now_section_sub_heading?: string | null, enter_now_section_body?: string | null, enter_now_section_CTA_label?: string | null, hero_section_youtube_video_id?: string | null, innovator_section_heading?: string | null, innovator_section_body?: string | null, innovator_section_CTA_label?: string | null, brands_section_heading?: string | null, brands_section_description?: string | null, brands_section_CTA_label?: string | null, hero_section_right_side_svg?: { __typename?: 'directus_files', id?: string | null, filename_disk?: string | null, description?: string | null, svg_code?: string | null } | null, innovator_section_image?: { __typename?: 'directus_files', id?: string | null, filename_disk?: string | null, description?: string | null, svg_code?: string | null } | null, current_year_filter?: { __typename?: 'judges_years', id?: string | null, year: string } | null, inspiration_articles?: Array<{ __typename?: 'home_page_inspiration_articles', id?: string | null, inspiration_article?: { __typename?: 'inspiration_articles', id?: string | null, title?: string | null, body?: string | null, read_more_label?: string | null, read_more_link?: string | null, image?: { __typename?: 'directus_files', id?: string | null, filename_disk?: string | null, description?: string | null, svg_code?: string | null } | null } | null } | null> | null } | null, past_winners_page?: { __typename?: 'past_winners_page', id?: string | null, heading?: string | null } | null, past_winners_categories?: Array<{ __typename?: 'past_winners_categories', id?: string | null, category: string } | null> | null, past_winners_years?: Array<{ __typename?: 'past_winners_years', id?: string | null, year: number } | null> | null, past_winners_aggregated?: Array<{ __typename?: 'past_winners_aggregated', count?: { __typename?: 'past_winners_aggregated_fields', id?: number | null } | null } | null> | null, past_winners?: Array<{ __typename?: 'past_winners', id?: string | null, name?: string | null, short_description?: string | null, school_name?: string | null, students_name?: string | null, youtube_video_id?: string | null, project_information?: string | null, image?: { __typename?: 'directus_files', id?: string | null, filename_disk?: string | null, description?: string | null, svg_code?: string | null } | null, year?: Array<{ __typename?: 'past_winners_past_winners_years', id?: string | null, past_winners_year?: { __typename?: 'past_winners_years', id?: string | null, year: number } | null } | null> | null, worksheets?: Array<{ __typename?: 'past_winners_past_winners_worksheets', id?: string | null, past_winners_worksheet?: { __typename?: 'past_winners_worksheets', id?: string | null, worksheet?: { __typename?: 'directus_files', id?: string | null, title?: string | null, filename_disk?: string | null } | null } | null } | null> | null, categories?: Array<{ __typename?: 'past_winners_past_winners_categories', id?: string | null, past_winners_category?: { __typename?: 'past_winners_categories', id?: string | null, category: string } | null } | null> | null } | null> | null, brands?: Array<{ __typename?: 'brands', id?: string | null, image?: { __typename?: 'directus_files', id?: string | null, description?: string | null, filename_disk?: string | null, svg_code?: string | null } | null } | null> | null };

 type InspirationPageQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
}>;


 type InspirationPageQuery = { __typename?: 'Query', inspiration_page?: { __typename?: 'inspiration_page', id?: string | null, heading?: string | null, description?: string | null, title_bar_text?: string | null, meta_description?: string | null, hero_image?: { __typename?: 'directus_files', id?: string | null, filename_disk?: string | null, description?: string | null, svg_code?: string | null } | null } | null, inspiration_articles_aggregated?: Array<{ __typename?: 'inspiration_articles_aggregated', count?: { __typename?: 'inspiration_articles_aggregated_fields', id?: number | null } | null } | null> | null, inspiration_articles?: Array<{ __typename?: 'inspiration_articles', id?: string | null, title?: string | null, body?: string | null, read_more_label?: string | null, read_more_link?: string | null, image?: { __typename?: 'directus_files', id?: string | null, filename_disk?: string | null, description?: string | null, svg_code?: string | null } | null } | null> | null };

 type JudgesPageQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  filterQuery?: InputMaybe<Judges_Filter>;
}>;


 type JudgesPageQuery = { __typename?: 'Query', judges?: Array<{ __typename?: 'judges', id?: string | null, name?: string | null, about_text?: string | null, company?: string | null, image?: { __typename?: 'directus_files', id?: string | null, filename_disk?: string | null, description?: string | null, svg_code?: string | null } | null } | null> | null, judges_years?: Array<{ __typename?: 'judges_years', id?: string | null, year: string } | null> | null, judges_page?: { __typename?: 'judges_page', id?: string | null, heading?: string | null, title_bar_text?: string | null, meta_description?: string | null } | null, judges_aggregated?: Array<{ __typename?: 'judges_aggregated', count?: { __typename?: 'judges_aggregated_fields', id?: number | null } | null } | null> | null };

 type PastWinnerDetailsQueryVariables = Exact<{
  id: Scalars['ID'];
  filterQuery?: InputMaybe<Past_Winners_Filter>;
}>;


 type PastWinnerDetailsQuery = { __typename?: 'Query', past_winners_by_id?: { __typename?: 'past_winners', id?: string | null, name?: string | null, students_name?: string | null, short_description?: string | null, youtube_video_id?: string | null, school_name?: string | null, project_information?: string | null, categories?: Array<{ __typename?: 'past_winners_past_winners_categories', id?: string | null, past_winners_category?: { __typename?: 'past_winners_categories', id?: string | null, category: string } | null } | null> | null, year?: Array<{ __typename?: 'past_winners_past_winners_years', id?: string | null, past_winners_year?: { __typename?: 'past_winners_years', id?: string | null, year: number } | null } | null> | null, worksheets?: Array<{ __typename?: 'past_winners_past_winners_worksheets', id?: string | null, past_winners_worksheet?: { __typename?: 'past_winners_worksheets', id?: string | null, worksheet?: { __typename?: 'directus_files', id?: string | null, filename_disk?: string | null, description?: string | null } | null } | null } | null> | null } | null, past_winners?: Array<{ __typename?: 'past_winners', id?: string | null } | null> | null };

 type PastWinnersPageQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  filterQuery?: InputMaybe<Past_Winners_Filter>;
}>;


 type PastWinnersPageQuery = { __typename?: 'Query', past_winners_page?: { __typename?: 'past_winners_page', id?: string | null, heading?: string | null, title_bar_text?: string | null, meta_description?: string | null } | null, past_winners_categories?: Array<{ __typename?: 'past_winners_categories', id?: string | null, category: string } | null> | null, past_winners_years?: Array<{ __typename?: 'past_winners_years', id?: string | null, year: number } | null> | null, past_winners_aggregated?: Array<{ __typename?: 'past_winners_aggregated', count?: { __typename?: 'past_winners_aggregated_fields', id?: number | null } | null } | null> | null, past_winners?: Array<{ __typename?: 'past_winners', id?: string | null, name?: string | null, short_description?: string | null, school_name?: string | null, students_name?: string | null, youtube_video_id?: string | null, project_information?: string | null, image?: { __typename?: 'directus_files', id?: string | null, filename_disk?: string | null, description?: string | null, svg_code?: string | null } | null, year?: Array<{ __typename?: 'past_winners_past_winners_years', id?: string | null, past_winners_year?: { __typename?: 'past_winners_years', id?: string | null, year: number } | null } | null> | null, worksheets?: Array<{ __typename?: 'past_winners_past_winners_worksheets', id?: string | null, past_winners_worksheet?: { __typename?: 'past_winners_worksheets', id?: string | null, worksheet?: { __typename?: 'directus_files', id?: string | null, title?: string | null, filename_disk?: string | null } | null } | null } | null> | null, categories?: Array<{ __typename?: 'past_winners_past_winners_categories', id?: string | null, past_winners_category?: { __typename?: 'past_winners_categories', id?: string | null, category: string } | null } | null> | null } | null> | null };

 type HeaderAndFooterQueryStore = import("@urql/svelte").OperationStore<HeaderAndFooterQuery, HeaderAndFooterQueryVariables>;
 type AboutPageQueryStore = import("@urql/svelte").OperationStore<AboutPageQuery, AboutPageQueryVariables>;
 type EnterPageQueryStore = import("@urql/svelte").OperationStore<EnterPageQuery, EnterPageQueryVariables>;
 type HomePageQueryStore = import("@urql/svelte").OperationStore<HomePageQuery, HomePageQueryVariables>;
 type InspirationPageQueryStore = import("@urql/svelte").OperationStore<InspirationPageQuery, InspirationPageQueryVariables>;
 type JudgesPageQueryStore = import("@urql/svelte").OperationStore<JudgesPageQuery, JudgesPageQueryVariables>;
 type PastWinnerDetailsQueryStore = import("@urql/svelte").OperationStore<PastWinnerDetailsQuery, PastWinnerDetailsQueryVariables>;
 type PastWinnersPageQueryStore = import("@urql/svelte").OperationStore<PastWinnersPageQuery, PastWinnersPageQueryVariables>;