import { useEffect, useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import ArticleForm from '../components/ArticleForm'
import useFetch from '../hooks/useFetch'
import { CurrentUserContext } from '../contexts/currentUser'

const CreateArticle = () => {
    const apiUrl = '/articles'
    const [{ response, error }, doFetch] = useFetch(apiUrl)
    const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false)
    const [currentUserState] = useContext(CurrentUserContext)

    const initialValues = {
        title: '',
        description: '',
        body: '',
        tagList: [],
    }
    const onSubmit = (article) => {
        doFetch({
            method: 'post',
            data: {
                article,
            },
        })
    }

    useEffect(() => {
        if (!response) {
            return
        }
        setIsSuccessfullSubmit(true)
    }, [response])

    if (currentUserState.isLoggedIn === null) {
        return null
    }

    if (isSuccessfullSubmit) {
        return <Redirect to={`/articles/${response.article.slug}`} />
    }

    if (isSuccessfullSubmit || currentUserState.isLoggedIn === false) {
        return <Redirect to={'/'} />
    }

    return (
        <div>
            <ArticleForm errors={(error && error.errors) || {}} initialValues={initialValues} onSubmit={onSubmit} />
        </div>
    )
}

export default CreateArticle
