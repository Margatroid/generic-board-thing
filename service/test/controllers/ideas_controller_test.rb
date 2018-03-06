require 'test_helper'

class IdeasControllerTest < ActionDispatch::IntegrationTest
  setup do
    @idea = ideas(:one)
  end

  test "should get index" do
    get ideas_url, as: :json
    assert_response :success
  end

  test "should create idea" do
    assert_difference('Idea.count') do
      post ideas_url, params: { idea: { title: 'Hello', body: 'World' } }, as: :json
    end

    assert_response 201
    response = JSON.parse(@response.body)
    assert_equal(Idea.last.id, response['id'])
  end

  test "should show idea" do
    idea = ideas(:one)
    idea.body = 'Hi'
    idea.title = 'You'
    idea.save

    get idea_url(idea), as: :json
    assert_response :success

    response = JSON.parse(@response.body)
    assert_equal(idea.body, response['body'])
    assert_equal(idea.title, response['title'])
  end

  test "should update idea" do
    patch idea_url(@idea), params: { idea: { title: 'lol', body: 'wut' } }, as: :json
    assert_response 200

    response = JSON.parse(@response.body)
    assert_equal('wut', response['body'])
    assert_equal('lol', response['title'])
  end

  test "should destroy idea" do
    assert_difference('Idea.count', -1) do
      delete idea_url(@idea), as: :json
    end

    assert_response 204
  end
end
