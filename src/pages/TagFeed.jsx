import {useEffect} from "react";
import Feed from "../components/Feed";
import PopularTags from "../components/PopularTags";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import Pagination from "../components/Paginations";
import FeedToggler from "../components/FeedToggler";
import useFetch from "../hooks/useFetch"
import {getPaginator, limit} from "../utils";
import {stringify} from "query-string";

const TagFeed = ({location, match}) => {
    const tagName = match.params.slug
    const {offset, currentPage} = getPaginator(location.search)
    const stringifiedParams = stringify({
        limit,
        offset,
        tag: tagName
    })
    const apiUrl = `/articles?${stringifiedParams}`
    const url = match.url
    const [{response, isLoading, error}, doFetch] = useFetch(apiUrl)


    useEffect(() => {
        doFetch()
    }, [doFetch, currentPage, tagName])

    return (
        <div className='home-page'>
            <div className='banner'>
                <div className='container'>
                    <h1>Medium Clone</h1>
                    <p>A place to share your hooks knowledge</p>
                </div>
            </div>
            <div className='container page'>
                <div className='row'>
                    <div className='col-md-9'>
                        <FeedToggler tagName={tagName}/>
                        {isLoading && <Loading/>}
                        {error && <ErrorMessage/>}
                        {!isLoading && response && (
                            <>
                                <Feed articles={response.articles}/>
                                <Pagination total={response.articlesCount} limit={limit} url={url}
                                            currentPage={currentPage}/>
                            </>
                        )}
                    </div>
                    <div className='col-md-3'>
                        <PopularTags/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TagFeed