package modext

import "koushoku/models"

type Tag struct {
	ID    int64  `json:"id" boil:"id"`
	Slug  string `json:"slug" boil:"slug"`
	Name  string `json:"name" boil:"name"`
	Count int64  `json:"count" boil:"archive_count"`
}

func NewTag(model *models.Tag) *Tag {
	if model == nil {
		return nil
	}
	return &Tag{ID: model.ID, Slug: model.Slug, Name: model.Name}
}
