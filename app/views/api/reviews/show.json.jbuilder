json.set! @review.id do 
    json.partial! 'api/reviews/review', review: @review
end

json.reviewers do 
    json.set! @review.buyer_id do
        json.partial! 'api/users/user', user: @review.buyer
    end
end
