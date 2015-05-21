react-fa-icon
=============

`react-fa-icon` help developer to integrate [react.js] with [font-awesome].

## Examples

```jsx
const { FaIcon, FaStack } = require('react-fa-icon');
```

**CAUTION** Font Awesome CSS is not required, it must be included in HTML or via WebPack manually.

### Basic Icons

**HTML**
```html
<i class="fa fa-camera-retro"></i>
```
**JSX**
```jsx
<FaIcon icon="camera-retro" />
```

### Larger Icons

**HTML**
```html
<i class="fa fa-camera-retro fa-lg"></i> fa-lg
<i class="fa fa-camera-retro fa-2x"></i> fa-2x
<i class="fa fa-camera-retro fa-3x"></i> fa-3x
<i class="fa fa-camera-retro fa-4x"></i> fa-4x
<i class="fa fa-camera-retro fa-5x"></i> fa-5x
```

**JSX**
```jsx
<FaIcon icon="camera-retro" size="lg" />
<FaIcon icon="camera-retro" size="2x" />
<FaIcon icon="camera-retro" size="3x" />
<FaIcon icon="camera-retro" size="4x" />
<FaIcon icon="camera-retro" size="5x" />
```

### Fixed Width Icons

**HTML**
```html
<div>
  <a href="#"><i class="fa fa-home fa-fw"></i>&nbsp; Home</a>
  <a href="#"><i class="fa fa-book fa-fw"></i>&nbsp; Library</a>
  <a href="#"><i class="fa fa-pencil fa-fw"></i>&nbsp; Applications</a>
  <a href="#"><i class="fa fa-cog fa-fw"></i>&nbsp; Settings</a>
</div>
```

**JSX**
```jsx
<div>
  <a href="#"><FaIcon icon="home" fixedWidth />&nbsp; Home</a>
  <a href="#"><FaIcon icon="book" fixedWidth />&nbsp; Library</a>
  <a href="#"><FaIcon icon="pencil" fixedWidth />&nbsp; Applications</a>
  <a href="#"><FaIcon icon="cog" fixedWidth />&nbsp; Settings</a>
</div>
```

### List Icons

**HTML**
```html
<ul class="fa-ul">
  <li><i class="fa-li fa fa-check-square"></i>List icons</li>
  <li><i class="fa-li fa fa-check-square"></i>can be used</li>
  <li><i class="fa-li fa fa-spinner fa-spin"></i>as bullets</li>
  <li><i class="fa-li fa fa-square"></i>in lists</li>
</ul>
```

**JSX**
```jsx
<ul className="fa-ul">
  <li><FaIcon icon="check-square listItem />List icons</li>
  <li><FaIcon icon="check-square listItem />can be used</li>
  <li><FaIcon icon="spinner" listItem spin />as bullets</li>
  <li><FaIcon icon="square" listItem />in lists</li>
</ul>

```

### Bordered & Pulled Icons

**HTML**
```html
<i class="fa fa-quote-left fa-3x pull-left fa-border"></i>
```

**JSX**
```jsx
<FaIcon icon="quote-left" size="3x" pull="left" border"/>
```

### Animated Icons

**HTML**
```html
<i class="fa fa-spinner fa-spin"></i>
<i class="fa fa-circle-o-notch fa-spin"></i>
<i class="fa fa-refresh fa-spin"></i>
<i class="fa fa-cog fa-spin"></i>
<i class="fa fa-spinner fa-pulse"></i>
```

**JSX**
```jsx
<FaIcon icon="spinner" spin />
<FaIcon icon="circle-o-notch" spin />
<FaIcon icon="refresh" spin />
<FaIcon icon="cog" spin />
<FaIcon icon="spinner" pulse />
```

### Rotated & Flipped

**HTML**
```html
<i class="fa fa-shield"></i> normal<br>
<i class="fa fa-shield fa-rotate-90"></i> fa-rotate-90<br>
<i class="fa fa-shield fa-rotate-180"></i> fa-rotate-180<br>
<i class="fa fa-shield fa-rotate-270"></i> fa-rotate-270<br>
<i class="fa fa-shield fa-flip-horizontal"></i> fa-flip-horizontal<br>
<i class="fa fa-shield fa-flip-vertical"></i> icon-flip-vertical
```

**JSX**
```jsx
<FaIcon icon="shield" />
<FaIcon icon="shield" rotate="90" />
<FaIcon icon="shield" rotate="180" />
<FaIcon icon="shield" rotate="270" />
<FaIcon icon="shield" flip="horizontal" />
<FaIcon icon="shield" flip="vertical" />
```

### Stacked Icons

**HTML**
```html
<span class="fa-stack fa-lg">
  <i class="fa fa-square-o fa-stack-2x"></i>
  <i class="fa fa-twitter fa-stack-1x"></i>
</span>

<span class="fa-stack fa-lg">
  <i class="fa fa-circle fa-stack-2x"></i>
  <i class="fa fa-flag fa-stack-1x fa-inverse"></i>
</span>

<span class="fa-stack fa-lg">
  <i class="fa fa-square fa-stack-2x"></i>
  <i class="fa fa-terminal fa-stack-1x fa-inverse"></i>
</span>

<span class="fa-stack fa-lg">
  <i class="fa fa-camera fa-stack-1x"></i>
  <i class="fa fa-ban fa-stack-2x text-danger"></i>
</span>
```

**JSX**
```jsx
<FaStack>
  <FaIcon icon="square-o" stack="2x" />
  <FaIcon icon="twitter" stack="1x" />
</FaStack>

<FaStack>
  <FaIcon icon="circle" stack="2x" />
  <FaIcon icon="flag" stack="1x" inverse />  
</FaStack>

<FaStack>
  <FaIcon icon="square" stack="2x" />
  <FaIcon icon="terminal" stack="1x" inverse />  
</FaStack>

<FaStack>  
  <FaIcon icon="camera" stack="1x"/>  
  <FaIcon icon="ban" stack="2x" className="text-danger" />
</FaStack>
```

[react-fa-icon]: https://github.com/timnew/react-fa-icon
[react.js]: http://facebook.github.io/react/
[font-awesome]: http://fortawesome.github.io/Font-Awesome/
