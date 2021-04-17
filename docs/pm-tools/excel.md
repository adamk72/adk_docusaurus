---
title: Issues with Excel
---
This less a rant about Excel, which is a powerful data analysis tool (but a _horrible_ to-do list or database. Please stop using it that way!) and more about the things I encounter with it.

## VBA
### UDFs
UDFs, or User Defined Formulas, can be a pain to debug. The error handling in VBA is atrocious, what with it not being very clear on what the actual issue is until you dive into debug.prints and such. VBA desperately needs a `try/catch` block.

#### Performance
UDFs have various odd dependencies, depending on what other formulas are in the function and what cells they are looking at. I am not quite clear on the details, but have read and experienced enough to see it could use some cleaning up.

That said, this little trick worked well. The scenario was that I had a complex UDF that was embedded among `substitutes` and other text modifying formulas, and when updating, it would often display `#VALUE` errors, despite being able to be `F2` refreshed to a valid display.

Easy enough fix for it was:
```vb
' At very top:
Application.Volatile(true)

' Anywhere near top:
Application.ScreenUpdating = False
Application.EnableEvents = False

' And then turn back to true at the function exit
```
That as enough to keep things updated so that other tables wouldn't freak out looking at the source data that was being cleaned up with my UDF.

`Application.Volatile(true)` seems to be the big thing; I tried having the UDF take `NOW()`, but that proved very unreliable.eby

### Cells Return Zero
One problem I find often is that an otherwise blank cell will actually return a zero value, which can throw off formulas depending on if it's expecting text or not. The fix is simple: coerce it to the format you want by using `Num+0` or `Text&""`.