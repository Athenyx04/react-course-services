export class Book {
  constructor(dto) {
    this.title = dto.title || '';
    this.description = dto.description || '';
    this.tags =
      [
        dto.subjects,
        dto.subject_places,
        dto.subject_people,
        dto.subject_times,
      ] || [];
    this.authors = dto.authors.map((key) => {
      return key.replace('/authors/', '');
    });
    this.coverId = dto.covers.length > 0 ? dto.covers[0] : null;
  }
}
